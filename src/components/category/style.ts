import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 10,
    shadowColor: colors.gray[100],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
    shadowColor: colors.green.base,
  },
  nameSelected: {
    color: colors.gray[100],
  },
})
