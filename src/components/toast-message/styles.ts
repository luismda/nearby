import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
  },
  container: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 32,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: colors.gray[200],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerSuccess: {
    backgroundColor: colors.green.soft,
  },
  containerError: {
    backgroundColor: colors.red.light,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  messageSuccess: {
    color: colors.gray[600],
  },
  messageError: {
    color: colors.gray[600],
  },
})
