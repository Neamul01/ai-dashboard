import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function PasswordReset() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to send the reset email
    // For this example, we'll just set isSubmitted to true
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <h2 className="text-center text-2xl font-bold">
          メールアドレスを入力してください
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-10 w-full"
                placeholder="test@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 rounded-md text-green-700 text-center">
            パスワードをリセットするための URL
            がメールに送信されました。ぜひご確認ください。
          </div>
        )}
      </div>
    </div>
  );
}
