
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" })
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileSetupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ open, onOpenChange }) => {
  const { user, updateUsername } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user?.username || ""
    }
  });

  const onSubmit = (data: ProfileFormValues) => {
    setIsSubmitting(true);
    
    try {
      updateUsername(data.username);
      onOpenChange(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#151926] border-[#232946] text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-white">Complete Your Profile</DialogTitle>
          <DialogDescription className="text-white/60">
            Choose a username to identify yourself on YieldMind.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Username</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter a username" 
                      className="bg-[#1E2235] border-[#232946] text-white"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          
            <DialogFooter>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#4361EE] to-[#6286FF] hover:from-[#3a56d4] hover:to-[#5a7eff] text-white"
              >
                {isSubmitting ? "Saving..." : "Save profile"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetup;
