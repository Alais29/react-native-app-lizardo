import dateFormat from 'dateformat';
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { List, useTheme, Text, ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import ErrorMessage from '../../Components/ErrorMessage';
import SummaryItem from '../../Components/List/SummaryItem';
import ScreenContainer from '../../Components/ScreenContainer';
import { Status } from '../../Features/interfaces';
import { getOrdersAsync } from '../../Features/orders/ordersSlice';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const Orders = () => {
  const { orders, status, error } = useSelector(state => state.orders);
  const { user } = useSelector(state => state.auth);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.idle) {
      dispatch(getOrdersAsync(user.userID));
    }
  }, []);

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={{
          ...styles.container,
          alignItems: isEmpty(orders) ? 'center' : 'stretch',
          justifyContent: isEmpty(orders) ? 'center' : 'flex-start',
        }}
      >
        {status === Status.loading ? (
          <ActivityIndicator animating color={colors.primary} />
        ) : null}

        {status === Status.success ? (
          <List.AccordionGroup>
            {orders.map(order => (
              <List.Accordion
                key={order.id}
                title={`Order ID: ${order.id}`}
                description={dateFormat(
                  order.date,
                  'mmmm dd, yyyy, h:MM tt, Z',
                )}
                id={order.id}
                style={{
                  ...styles.accordion,
                  backgroundColor: colors.accent,
                }}
              >
                {order.products.map(product => (
                  <SummaryItem
                    item={product}
                    customBackgroundColor={colors.background}
                    customTextColor={colors.header}
                    key={product.id}
                  />
                ))}
                <View style={styles.orderInfo}>
                  <Text style={{ fontWeight: 'bold', color: colors.header }}>
                    Delivery address:
                  </Text>
                  <Text style={{ color: colors.header }}>
                    {order.deliveryAddress.address}
                  </Text>
                </View>
                <View style={{ ...styles.orderInfo, flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', color: colors.header }}>
                    Total:
                  </Text>
                  <Text style={{ color: colors.header }}> ${order.total}</Text>
                </View>
              </List.Accordion>
            ))}
          </List.AccordionGroup>
        ) : null}

        {status === Status.failed ? (
          <ErrorMessage
            errorMessage={
              error.includes('No orders')
                ? "You don't have any orders yet."
                : 'There was an issue getting the orders'
            }
            showTryLaterMsg={!error.includes('No orders')}
          />
        ) : null}
      </ScrollView>
    </ScreenContainer>
  );
};

export default Orders;
