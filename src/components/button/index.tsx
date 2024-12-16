import { ComponentType } from 'react'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'

import {
  Text,
  TextProps,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native'

import { s } from './styles'
import { colors } from '@/styles/theme'

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoading}
      style={[s.container, style]}
      {...props}
    >
      {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  )
}

function Title({ style, ...props }: TextProps) {
  return <Text style={[s.title, style]} {...props} />
}

interface IconProps {
  icon: ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }
