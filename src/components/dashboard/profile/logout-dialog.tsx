"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteSessionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  sessionInfo?: {
    device: string;
    browser: string;
    os: string;
  };
  isDeleting?: boolean;
}

export function DeleteSessionDialog({
  open,
  onOpenChange,
  onConfirm,
  sessionInfo,
  isDeleting = false,
}: DeleteSessionDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Revoke Session</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to revoke this session? This will immediately
            sign out the device and invalidate the session token.
          </AlertDialogDescription>
          {sessionInfo && (
            <div className="mt-2 p-3 bg-muted rounded-lg">
              <div className="font-medium text-sm">
                {sessionInfo.device} - {sessionInfo.browser} on {sessionInfo.os}
              </div>
            </div>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? "Revoking..." : "Revoke Session"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
