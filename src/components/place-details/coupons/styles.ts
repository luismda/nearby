import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 32,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: colors.red.light,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  coupons: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  containerDisabled: {
    backgroundColor: colors.gray[200],
  },
  couponsDisabled: {
    color: colors.gray[500],
  },
  couponsAmount: {
    fontFamily: fontFamily.semibold,
  },
})
