export default function injectScanner() {
  // 添加启动参数和环境判断注入
  if (process.env.NODE_ENV === "development") {
    return (
      <head>
        <script src="//unpkg.com/react-scan/dist/auto.global.js" crossOrigin="anonymous" async />
      </head>
    );
  }
}
