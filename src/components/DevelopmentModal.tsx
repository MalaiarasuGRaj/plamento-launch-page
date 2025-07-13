import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DevelopmentModal = ({ isOpen, onClose }: DevelopmentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            🛠️ Product Under Development
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-4">
          <p className="text-muted-foreground">
            We're working hard to bring this feature to life. Stay tuned!
          </p>
        </div>

        <div className="flex justify-center">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DevelopmentModal;