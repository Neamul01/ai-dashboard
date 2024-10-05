import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

export default function ConfirmPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to update the password
    console.log('Password reset submitted');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl font-bold text-center">パスワードのリセット</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <Label htmlFor="new-password" className="sr-only">
                新しいパスワード
              </Label>
              <Input
                id="new-password"
                name="newPassword"
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full"
                placeholder="新しいパスワード"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            <div className="relative mt-2">
              <Label htmlFor="confirm-password" className="sr-only">
                新しいパスワード再入力
              </Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full"
                placeholder="新しいパスワード再入力"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              次へ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
