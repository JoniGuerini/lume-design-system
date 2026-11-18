// Gerado por scripts/build-react.mjs. Não edite.
export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
export interface ToastOptions {
  /** Uma segunda linha, mais apagada, embaixo da mensagem (que vira o título). */
  description?: string;
  icon?: string;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  action?: { label: string; onClick: () => void };
  duration?: number;
  position?: ToastPosition;
}
export declare const TOAST_POSITIONS: ToastPosition[];
export declare function toast(message: string, options?: ToastOptions): { close(): void };
export declare function clearToasts(): void;
export declare function copyText(text: string, label?: string, options?: { echo?: boolean }): Promise<boolean>;
export declare function getToastPosition(): ToastPosition;
export declare function setToastPosition(position: ToastPosition): ToastPosition;
export declare function toastContent(message: string, options?: ToastOptions & { dismissible?: boolean }): string;
export declare function toastClasses(options?: { tone?: string; description?: string }): string;
