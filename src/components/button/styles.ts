import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 10,
    backgroundColor: colors.green.base,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semibold,
    color: colors.gray[100],
  },
})
