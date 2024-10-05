import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';

export default function TwoFactorAuth() {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to verify the code
    console.log('Verification code submitted');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">2要素認証</h2>
          <p className="mt-2 text-sm text-gray-600">
            ご登録の電話番号 070 **** **21
            に確認コードを送信しました。コードを入力してください。
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label htmlFor="verification-code" className="sr-only">
                検証コード
              </Label>
              <Input
                id="verification-code"
                name="code"
                type="text"
                required
                className="w-full"
                placeholder="検証コード"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              コードの検証
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
