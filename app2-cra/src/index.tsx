import React from "react";
import ReactDOM from "react-dom";
import "./public-path";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root-cra"));
};

// 在不是qiankun的情况下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("app2 create-react-app bootstraped");
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: unknown) {
  console.log("app2 create-react-app mount", props);
  render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("app2 create-react-app unmount");
  ReactDOM.unmountComponentAtNode(document.getElementById("root-cra")!);
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: unknown) {
  console.log("update props", props);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
