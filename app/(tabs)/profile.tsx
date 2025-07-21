import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { User, Settings, Bell, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const profileStats = [
    { label: 'Events This Month', value: '24', icon: Calendar },
    { label: 'Total Distance', value: '1,247 mi', icon: MapPin },
    { label: 'Time Saved', value: '8.5 hrs', icon: Clock }
  ];

  const menuItems = [
    { label: 'Notifications', icon: Bell, hasSwitch: true },
    { label: 'Location Services', icon: MapPin, hasSwitch: true },
    { label: 'Calendar Sync', icon: Calendar, hasSwitch: false },
    { label: 'Settings', icon: Settings, hasSwitch: false }
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-4 pb-6 px-4">
          <Text className="text-3xl font-bold text-gray-800 mb-2">Profile</Text>
          <Text className="text-gray-600">Manage your account and preferences</Text>
        </View>

        {/* Profile Card */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <View className="items-center mb-6">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4 shadow-lg">
              <User size={40} color="white" />
            </View>
            <Text className="text-2xl font-bold text-gray-800 mb-1">John Doe</Text>
            <Text className="text-gray-600">john.doe@example.com</Text>
          </View>

          {/* Stats */}
          <View className="flex-row justify-between">
            {profileStats.map((stat, index) => (
              <View key={index} className="items-center flex-1">
                <View className="bg-blue-50 rounded-full p-3 mb-2">
                  <stat.icon size={20} color="#3B82F6" />
                </View>
                <Text className="text-lg font-bold text-gray-800">{stat.value}</Text>
                <Text className="text-gray-500 text-sm text-center">{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Preferences</Text>
          
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
            >
              <View className="flex-row items-center">
                <View className="bg-gray-50 rounded-full p-2 mr-3">
                  <item.icon size={20} color="#6B7280" />
                </View>
                <Text className="text-gray-800 font-medium">{item.label}</Text>
              </View>
              
              {item.hasSwitch ? (
                <View className="w-12 h-6 bg-blue-500 rounded-full p-1">
                  <View className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
                </View>
              ) : (
                <ChevronRight size={20} color="#6B7280" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Recent Activity</Text>
          
          {[
            { action: 'Completed Team Sync', time: '2 hours ago', location: 'London to Southampton' },
            { action: 'Updated route preferences', time: '1 day ago', location: 'Settings' },
            { action: 'Scheduled Design Review', time: '2 days ago', location: 'London to Brighton' }
          ].map((activity, index) => (
            <View key={index} className="py-3 border-b border-gray-100 last:border-b-0">
              <Text className="text-gray-800 font-medium mb-1">{activity.action}</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-500 text-sm">{activity.time}</Text>
                <Text className="text-gray-400 text-sm mx-2">•</Text>
                <Text className="text-gray-500 text-sm">{activity.location}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}