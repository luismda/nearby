import { IconTicket } from '@tabler/icons-react-native'
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { s } from './styles'
import { colors } from '@/styles/theme'
import { FetchPlacesResponse } from '@/api'

interface PlaceProps extends TouchableOpacityProps {
  data: FetchPlacesResponse
}

export function Place({ data, ...props }: PlaceProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.8} {...props}>
      <Image style={s.image} source={{ uri: data.cover }} />

      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>

        <Text
          numberOfLines={2}
          style={s.description}
        >
          {data.description}
        </Text>

        <View style={s.footer}>
          <IconTicket size={16} color={colors.red.base} />

          <Text style={s.tickets}>
            {data.coupons === 1 ? '1 cupom disponível' : `${data.coupons} cupons disponíveis`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
