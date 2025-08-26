import { useState, useRef } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  acceptedTypes?: string[];
  maxSize?: number; // in MB
  className?: string;
}

export const FileUpload = ({ 
  onFileSelect, 
  acceptedTypes = ['.csv', '.xlsx', '.xls'],
  maxSize = 10,
  className 
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    setError('');
    
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      return false;
    }
    
    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedTypes.includes(fileExtension)) {
      setError(`Please upload a file with one of these extensions: ${acceptedTypes.join(', ')}`);
      return false;
    }
    
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-8 text-center transition-smooth',
          dragActive 
            ? 'border-accent bg-accent/5' 
            : 'border-border hover:border-accent/50 hover:bg-accent/5',
          selectedFile ? 'bg-accent/5 border-accent' : ''
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={acceptedTypes.join(',')}
          onChange={handleChange}
          className="hidden"
        />
        
        {!selectedFile ? (
          <>
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-text-primary mb-2">
              Drop your portfolio file here
            </p>
            <p className="text-text-secondary mb-4">
              or click to browse files
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-medium transition-smooth"
            >
              Choose File
            </button>
            <p className="text-sm text-text-secondary mt-3">
              Supported formats: {acceptedTypes.join(', ')} • Max size: {maxSize}MB
            </p>
          </>
        ) : (
          <div className="flex items-center justify-center space-x-4">
            <FileText className="h-8 w-8 text-accent" />
            <div className="flex-1 text-left">
              <p className="font-medium text-text-primary">{selectedFile.name}</p>
              <p className="text-sm text-text-secondary">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              onClick={removeFile}
              className="p-2 hover:bg-destructive/10 rounded-full transition-smooth"
            >
              <X className="h-5 w-5 text-destructive" />
            </button>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-destructive text-sm mt-2">{error}</p>
      )}
    </div>
  );
};