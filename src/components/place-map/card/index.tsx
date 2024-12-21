import { Info } from '@/components/place-details/info'
import { colors } from '@/styles/theme'
import {
  IconMapPin,
  IconPhone,
  IconTicket,
  IconToolsKitchen2,
} from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { s } from './styles'

interface CardProps {
  name: string
  coupons: number
  address: string
  phone: string
}

export function Card({ name, coupons, address, phone }: CardProps) {
  const insets = useSafeAreaInsets()

  return (
    <View style={[s.container, { bottom: insets.bottom + 32 }]}>
      <View style={s.card}>
        <View style={s.header}>
          <View style={s.title}>
            <Text style={s.name}>{name}</Text>
            <IconToolsKitchen2 size={24} color={colors.green.light} />
          </View>

          <View style={[s.coupons, coupons === 0 && s.couponsDisabled]}>
            <IconTicket size={20} color={colors.red.base} />

            <Text
              style={[
                s.couponsAmount,
                coupons === 0 && s.couponsAmountDisabled,
              ]}
            >
              {coupons}
            </Text>
          </View>
        </View>

        <View>
          <Info icon={IconMapPin} description={address} />
          <Info icon={IconPhone} description={phone} />
        </View>
      </View>
    </View>
  )
}
