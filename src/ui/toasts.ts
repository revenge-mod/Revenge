import { toasts } from "@metro/common";
import { findByProps } from "@metro/filters";

const { uuid4 } = findByProps("uuid4");

export const showToast = (content: string, asset?: number) =>
  toasts.open({
    //? In build 182205/44707, Discord changed their toasts, source is no longer used, rather icon, and a key is needed.
    // TODO: We could probably have the developer specify a key themselves, but this works to fix toasts
    key: `vd-toast-${uuid4()}`,
    content: content,
    source: asset,
    icon: asset
  });
