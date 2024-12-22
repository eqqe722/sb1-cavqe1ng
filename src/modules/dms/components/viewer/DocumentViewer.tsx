```typescript
import React from 'react';
import { Document } from '../../types/document';
import { formatDate } from '../../../../utils/date';
import { 
  FileText, Download, Printer, Share2, Lock,
  Eye, Edit, Trash, History, Star 
} from 'lucide-react';
import { Button } from '../../../../components/common/Button';

interface DocumentViewerProps {
  document: Document;
  onDownload: () => void;
  onPrint: () => void;
  onShare: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function DocumentViewer({
  document,
  onDownload,
  onPrint,
  onShare,
  onEdit,
  onDelete
}: DocumentViewerProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">{document.title.ar}</h2>
          <p className="text-sm text-gray-500">
            النسخة {document.version.number} • تم التحديث {formatDate(document.updatedAt)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={onDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            تحميل
          </Button>
          <Button
            variant="outline"
            onClick={onPrint}
            className="flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            طباعة
          </Button>
          <Button
            variant="outline"
            onClick={onShare}
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            مشاركة
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {document.content.mimeType.startsWith('image/') ? (
              <img
                src={document.content.fileUrl}
                alt={document.title.ar}
                className="max-w-full h-auto rounded"
              />
            ) : (
              <div className="aspect-video flex items-center justify-center bg-gray-100 rounded">
                <FileText className="w-16 h-16 text-gray-400" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">تفاصيل المستند</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-gray-500">النوع</dt>
                <dd className="text-sm">{document.type}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">التصنيف</dt>
                <dd className="text-sm">{document.category}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">درجة السرية</dt>
                <dd className="text-sm">{document.classification}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">المؤلف</dt>
                <dd className="text-sm">{document.metadata.author}</dd>
              </div>
              {document.metadata.expiryDate && (
                <div>
                  <dt className="text-sm text-gray-500">تاريخ الانتهاء</dt>
                  <dd className="text-sm">{formatDate(document.metadata.expiryDate)}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">الصلاحيات</h3>
            <div className="space-y-2">
              {document.access.permissions.map((permission) => (
                <div
                  key={permission.userId}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{permission.userId}</span>
                  <div className="flex items-center gap-1">
                    {permission.rights.map((right) => (
                      <span
                        key={right}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {right}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```