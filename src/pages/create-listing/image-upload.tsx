import { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      
      files.forEach((file) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            onChange([...value, reader.result as string]);
          };
          reader.readAsDataURL(file);
        }
      });
    },
    [value, onChange]
  );

  const onFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      
      files.forEach((file) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            onChange([...value, reader.result as string]);
          };
          reader.readAsDataURL(file);
        }
      });
    },
    [value, onChange]
  );

  return (
    <div className="space-y-4">
      <Card
        className="border-dashed p-8 text-center cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          id="image-upload"
          onChange={onFileSelect}
        />
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center cursor-pointer"
        >
          <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
          <p className="text-muted-foreground">
            Arrastra y suelta imágenes aquí o haz clic para seleccionar
          </p>
        </label>
      </Card>

      {value.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {value.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-32 object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}