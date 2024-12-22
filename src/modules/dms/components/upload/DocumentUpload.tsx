```typescript
import React, { useState } from 'react';
import { Document, DocumentType, DocumentCategory } from '../../types/document';
import { Button } from '../../../../components/common/Button';
import { Upload, X } from 'lucide-react';

interface DocumentUploadProps {
  onUpload: (document: Partial<Document>, file: File) => Promise<void>;
}

export default function DocumentUpload({ onUpload }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const documentData: Partial<Document> = {
        title: {
          ar: formData.get('title_ar') as string,
          en: formData.get('title_en') as string
        },
        type: formData.get('type') as DocumentType,
        category: formData.get('category') as DocumentCategory,
        metadata: {
          author: formData.get('author') as string,
          department: formData.get('department') as string,
          isConfidential: formData.get('confidential') === 'true',
          requiresStamp: formData.get('requires_stamp') === 'true',
          isOriginal: true
        }
      };

      await onUpload(documentData, file);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">رفع مستند جديد</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              العنوان (بالعربية)
            </label>
            <input
              type="text"
              name="title_ar"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              العنوان (بالإنجليزية)
            </label>
            <input
              type="text"
              name="title_en"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع المستند
            </label>
            <select
              name="type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="letter">رسالة</option>
              <option value="contract">عقد</option>
              <option value="report">تقرير</option>
              <option value="license">رخصة</option>
              <option value="certificate">شهادة</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              التصنيف
            </label>
            <select
              name="category"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="administrative">إداري</option>
              <option value="legal">قانوني</option>
              <option value="financial">مالي</option>
              <option value="hr">موارد بشرية</option>
              <option value="technical">تقني</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-12 h-12 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  {file ? file.name : 'انقر لاختيار ملف أو اسحب وأفلت هنا'}
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" type="button">
          إلغاء
        </Button>
        <Button type="submit" disabled={uploading}>
          {uploading ? 'جاري الرفع...' : 'رفع المستند'}
        </Button>
      </div>
    </form>
  );
}
```