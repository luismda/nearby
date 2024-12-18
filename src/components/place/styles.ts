import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    height: 124,
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  image: {
    width: 116,
    height: 104,
    borderRadius: 8,
    backgroundColor: colors.gray[200],
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    lineHeight: 17,
  },
  footer: {
    gap: 8,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickets: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
})
