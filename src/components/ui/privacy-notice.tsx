import { Shield, Lock, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PrivacyNotice = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/50 shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-glow flex-shrink-0">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              Your Privacy Matters
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              All conversations are private and secure. We don't store your personal information or chat history permanently. 
              Your emotional wellness journey is completely confidential.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-600">
              <Eye className="w-3 h-3" />
              <span className="font-medium">End-to-end encrypted • No data retention • HIPAA compliant</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};