import { Database, Mail, MessageSquare, Cloud, FileText, Calendar } from 'lucide-react'

export default function IntegrationSection() {
  return (
    <section id="integration" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            통합 연동
          </h2>
          <p className="text-xl text-gray-600">
            자주 사용하는 서비스와 즉시 연결하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Database className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">데이터베이스</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>MySQL</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>PostgreSQL</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>MongoDB</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Oracle</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MessageSquare className="text-purple-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">메신저</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Slack</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Microsoft Teams</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Discord</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Telegram</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">이메일</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Gmail</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Outlook</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SendGrid</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mailchimp</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Cloud className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">클라우드</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>AWS S3</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Google Drive</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dropbox</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>OneDrive</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <Calendar className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">일정 관리</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Google Calendar</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Outlook Calendar</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Notion</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Asana</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <FileText className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">문서 관리</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>SharePoint</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Confluence</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Notion</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Google Docs</span>
                <span className="text-green-500 font-semibold">연동됨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            원하는 서비스가 없나요?
          </h3>
          <p className="text-gray-600 mb-6">
            커스텀 API 연동을 통해 어떤 서비스든 연결할 수 있습니다
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
            커스텀 연동 문의하기
          </button>
        </div>
      </div>
    </section>
  )
}

