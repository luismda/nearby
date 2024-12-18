import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    gap: 16,
    width: '100%',
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semibold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4,
    lineHeight: 20,
  },
})
