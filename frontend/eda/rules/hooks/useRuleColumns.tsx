import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ITableColumn, TextCell } from '../../../../framework'
import { RouteE } from '../../../Routes'
import { EdaRule } from '../../interfaces/EdaRule'

export function useRuleColumns() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return useMemo<ITableColumn<EdaRule>[]>(
    () => [
      {
        header: t('ID'),
        cell: (inventory) => inventory.id,
        isIdColumn: true,
        sort: 'id',
      },
      {
        header: t('Name'),
        cell: (rule) => (
          <TextCell
            text={rule.name}
            onClick={() => navigate(RouteE.EdaRuleDetails.replace(':id', rule.id.toString()))}
          />
        ),
        sort: 'name',
        primary: true,
        defaultSort: true,
      },
    ],
    [navigate, t]
  )
}
