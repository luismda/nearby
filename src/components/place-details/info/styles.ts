import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 14,
    lineHeight: 24,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
})
