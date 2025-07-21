import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { MapPin, Clock, Car, Brain as Train, Bike } from 'lucide-react-native';

export default function RoutesScreen() {
  const routes = [
    {
      id: 1,
      from: 'London',
      to: 'Southampton',
      duration: '1h 30m',
      distance: '79 miles',
      transport: 'car',
      cost: '£12.50'
    },
    {
      id: 2,
      from: 'London',
      to: 'Brighton',
      duration: '1h 15m',
      distance: '54 miles',
      transport: 'train',
      cost: '£18.90'
    },
    {
      id: 3,
      from: 'Manchester',
      to: 'Liverpool',
      duration: '45m',
      distance: '35 miles',
      transport: 'car',
      cost: '£8.20'
    }
  ];

  const getTransportIcon = (transport: string) => {
    switch (transport) {
      case 'car':
        return <Car size={24} color="#3B82F6" />;
      case 'train':
        return <Train size={24} color="#3B82F6" />;
      case 'bike':
        return <Bike size={24} color="#3B82F6" />;
      default:
        return <Car size={24} color="#3B82F6" />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-4 pb-6 px-4">
          <Text className="text-3xl font-bold text-gray-800 mb-2">Routes</Text>
          <Text className="text-gray-600">Explore travel options and routes</Text>
        </View>

        {/* Popular Routes */}
        <View className="px-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Popular Routes</Text>
          
          {routes.map((route) => (
            <TouchableOpacity
              key={route.id}
              className="bg-white rounded-3xl shadow-lg p-6 mb-4"
            >
              {/* Route Header */}
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <MapPin size={16} color="#6B7280" />
                  <Text className="text-gray-600 ml-2 font-medium">
                    {route.from} to {route.to}
                  </Text>
                </View>
                <View className="bg-blue-50 rounded-full p-2">
                  {getTransportIcon(route.transport)}
                </View>
              </View>

              {/* Route Details */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Clock size={16} color="#6B7280" />
                  <Text className="text-gray-700 ml-2 font-medium">{route.duration}</Text>
                  <Text className="text-gray-500 ml-4">{route.distance}</Text>
                </View>
                <Text className="text-lg font-bold text-blue-600">{route.cost}</Text>
              </View>

              {/* Progress Bar */}
              <View className="mt-4 h-2 bg-gray-100 rounded-full">
                <View className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="px-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Quick Actions</Text>
          
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-white rounded-3xl shadow-lg p-6 flex-1 mr-2 items-center">
              <View className="bg-blue-50 rounded-full p-4 mb-3">
                <MapPin size={24} color="#3B82F6" />
              </View>
              <Text className="text-gray-800 font-semibold">Find Route</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-white rounded-3xl shadow-lg p-6 flex-1 ml-2 items-center">
              <View className="bg-green-50 rounded-full p-4 mb-3">
                <Clock size={24} color="#10B981" />
              </View>
              <Text className="text-gray-800 font-semibold">Live Traffic</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}