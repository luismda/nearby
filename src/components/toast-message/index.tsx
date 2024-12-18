import { colors } from '@/styles/theme'
import { IconCheck, IconInfoCircle, IconX } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import { s } from './styles'

interface ToastMessageProps {
  message: string
  variant?: 'info' | 'success' | 'error'
}

export function ToastMessage({ message, variant = 'info' }: ToastMessageProps) {
  return (
    <View style={s.wrapper}>
      <View
        style={[
          s.container,
          variant === 'success' && s.containerSuccess,
          variant === 'error' && s.containerError,
        ]}
      >
        {variant === 'info' && (
          <IconInfoCircle size={24} color={colors.gray[400]} />
        )}

        {variant === 'success' && (
          <IconCheck size={24} color={colors.green.light} />
        )}

        {variant === 'error' && <IconX size={24} color={colors.red.base} />}

        <Text
          style={[
            s.message,
            variant === 'success' && s.messageSuccess,
            variant === 'error' && s.messageError,
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  )
}
