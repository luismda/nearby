import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
  },
  card: {
    gap: 16,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 28,
    backgroundColor: colors.gray[100],
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  coupons: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: colors.red.light,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  couponsAmount: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  couponsDisabled: {
    backgroundColor: colors.gray[200],
  },
  couponsAmountDisabled: {
    color: colors.gray[500],
  },
})
