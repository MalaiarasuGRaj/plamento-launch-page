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
  isWaitlistMessage?: boolean;
}

const DevelopmentModal = ({ isOpen, onClose, isWaitlistMessage }: DevelopmentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            {isWaitlistMessage ? "Join Waitlist" : "🛠️ Product Under Development"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-4">
          {isWaitlistMessage ? (
            <p className="text-muted-foreground">
              Join the waitlist, we will onboard you when the product is available for public use.
            </p>
          ) : (
          <p className="text-muted-foreground">
            We're working hard to bring this feature to life. Stay tuned!
          </p>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
          {isWaitlistMessage && (
            <Button onClick={() => {
              window.location.href = '/join';
              onClose();
            }}>Join Waitlist</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DevelopmentModal;