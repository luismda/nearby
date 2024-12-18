import {
  IconMapPin,
  IconPhone,
  IconToolsKitchen2,
} from '@tabler/icons-react-native'
import { Text, View } from 'react-native'

import type { GetPlaceResponse } from '@/api'
import { colors } from '@/styles/theme'
import { Coupons } from '../coupons'
import { Info } from '../info'
import { s } from './styles'

interface DetailsProps {
  data: GetPlaceResponse
}

export function Details({ data }: DetailsProps) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.name}>{data.name}</Text>
        <IconToolsKitchen2 size={24} color={colors.green.light} />
      </View>

      <Text style={s.description}>{data.description}</Text>

      <Coupons coupons={data.coupons} />

      <View style={s.group}>
        <Text style={s.title}>Regulamento</Text>

        {data.rules.map(item => {
          return (
            <Text key={item.id} style={s.rule}>
              {`  \u2022 ${item.description}`}
            </Text>
          )
        })}
      </View>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>

        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
    </View>
  )
}
