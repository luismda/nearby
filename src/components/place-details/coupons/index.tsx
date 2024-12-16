import { Text, View } from 'react-native'
import { IconTicket } from '@tabler/icons-react-native'

import { s } from './styles'
import { colors } from '@/styles/theme'

interface CouponsProps {
  coupons: number
}

export function Coupons({ coupons }: CouponsProps) {
  return (
    <View style={[s.container, coupons === 0 && s.containerDisabled]}>
      <IconTicket 
        size={24} 
        color={coupons > 0 ? colors.red.base : colors.gray[400]}
      />

      <Text style={[s.coupons, coupons === 0 && s.couponsDisabled]}>
        <Text style={s.couponsAmount}>{coupons}</Text>
        {coupons === 1 ? ' cupom disponível' : ' cupons disponíveis'}
      </Text>
    </View>
  )
}
