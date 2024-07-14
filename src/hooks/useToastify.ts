import { ToastOptions, toast } from 'react-toastify'
import { useToggleSystemOrAppTheme } from '@/hooks/useToggleSystemOrAppTheme'

export function useToastify(): { toast: (message: string, type: ToastOptions['type']) => void } {
    const { theme } = useToggleSystemOrAppTheme()

    const toastFn = (message: string, type: ToastOptions['type']): void => {
        toast(message, {
            type,
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme as ThemeModes
        })
    }

    return {
        toast: toastFn
    }
}
