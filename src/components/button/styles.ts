import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

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
    shadowColor: colors.green.base,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,
  },
  containerDisabled: {
    opacity: 0.7,
    shadowColor: 'transparent',
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semibold,
    color: colors.gray[100],
  },
})
