import { routePath as autoReportRoutePath } from "#domains/autoReport/routes/path";
import { routePath as settingRoutePath } from "#domains/setting/routes/path";
import { routePath as systemRoutePath } from "#domains/system/routes/path";

export { basePath } from "#routes/path";

export const menus = [
  {
    name: "종합소득세 (E/P) 관리",
    list: [
      {
        name: "자동 신고",
        list: [
          {
            name: "Workflow 변경 작업",
            path: autoReportRoutePath.AutoReportWorkflow.absolute,
          },
          {
            name: "알림톡 발송 작업",
            path: autoReportRoutePath.AutoReportAlimtalk.absolute,
          },
        ],
      },
      {
        name: "시스템 관리",
        list: [
          {
            name: "스미스 신고 스케줄 관리",
            path: systemRoutePath.SystemSmithScheduler.absolute,
          },
          {
            name: "자동 스케줄 관리",
            path: systemRoutePath.SystemAutoScheduler.absolute,
          },
          {
            name: "일괄 메모 관리",
            path: systemRoutePath.SystemBatchedMemo.absolute,
          },
        ],
      },
      {
        name: "설정 정보 관리",
        list: [
          {
            name: "환급 서비스 설정",
            path: settingRoutePath.SettingRefund.absolute,
          },
          {
            name: "앱 설정",
            path: settingRoutePath.SettingApp.absolute,
          },
        ],
      },
    ],
  },
];
