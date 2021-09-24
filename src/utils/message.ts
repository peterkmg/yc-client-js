import { ElMessage } from 'element-plus/es'

export default {
  default: (message: string) => ElMessage({ message }),
  error: (message: string) => ElMessage({ type: 'error', message }),
  warning: (message: string) => ElMessage({ type: 'warning', message }),
  success: (message: string) => ElMessage({ type: 'success', message }),
}
