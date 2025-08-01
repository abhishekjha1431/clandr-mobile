import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { User, Settings, Bell, Calendar, Globe, ChevronRight, ExternalLink } from 'lucide-react-native';

export default function ProfileScreen() {
  const [calendarSync, setCalendarSync] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  const profileStats = [
    { label: 'Total Events', value: '4', icon: Calendar },
    { label: 'Active Events', value: '3', icon: Globe },
    { label: 'Monthly Bookings', value: '38', icon: User }
  ];

  const quickLinks = [
    { label: 'My Events', icon: Calendar, screen: 'index' },
    { label: 'My Schedule', icon: Calendar, screen: 'schedule' },
    { label: 'Public Profile', icon: Globe, screen: 'public' }
  ];

  const preferences = [
    { 
      label: 'Calendar Sync', 
      description: 'Sync with Google Calendar',
      value: calendarSync, 
      onToggle: () => setCalendarSync(!calendarSync)
    },
    { 
      label: 'Notifications', 
      description: 'Booking and reminder notifications',
      value: notifications, 
      onToggle: () => setNotifications(!notifications)
    },
    { 
      label: 'Public Profile', 
      description: 'Allow others to book your events',
      value: publicProfile, 
      onToggle: () => setPublicProfile(!publicProfile)
    }
  ];

  const accountSettings = [
    { label: 'Account Settings', icon: User },
    { label: 'Privacy & Security', icon: Settings },
    { label: 'Help & Support', icon: Bell },
    { label: 'About', icon: Settings }
  ];

  const ToggleSwitch = ({ value, onToggle }: { value: boolean; onToggle: () => void }) => (
    <TouchableOpacity
      onPress={onToggle}
      className={`w-12 h-6 rounded-full p-1 ${value ? 'bg-blue-500' : 'bg-gray-300'}`}
    >
      <View className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all ${value ? 'ml-auto' : ''}`} />
    </TouchableOpacity>
  );

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

        {/* Quick Links */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Quick Links</Text>
          
          {quickLinks.map((link, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
            >
              <View className="flex-row items-center">
                <View className="bg-blue-50 rounded-full p-2 mr-3">
                  <link.icon size={20} color="#3B82F6" />
                </View>
                <Text className="text-gray-800 font-medium">{link.label}</Text>
              </View>
              <ExternalLink size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Preferences */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Preferences</Text>
          
          {preferences.map((pref, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
            >
              <View className="flex-1">
                <Text className="text-gray-800 font-medium mb-1">{pref.label}</Text>
                <Text className="text-gray-500 text-sm">{pref.description}</Text>
              </View>
              <ToggleSwitch value={pref.value} onToggle={pref.onToggle} />
            </View>
          ))}
        </View>

        {/* Account Settings */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Account</Text>
          
          {accountSettings.map((setting, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
            >
              <View className="flex-row items-center">
                <View className="bg-gray-50 rounded-full p-2 mr-3">
                  <setting.icon size={20} color="#6B7280" />
                </View>
                <Text className="text-gray-800 font-medium">{setting.label}</Text>
              </View>
              <ChevronRight size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mx-4 mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Recent Activity</Text>
          
          {[
            { action: 'Created new event "Play football⚽"', time: '2 hours ago' },
            { action: 'Updated schedule availability', time: '1 day ago' },
            { action: 'Received booking for Coffee Chat', time: '2 days ago' },
            { action: 'Enabled calendar sync', time: '3 days ago' }
          ].map((activity, index) => (
            <View key={index} className="py-3 border-b border-gray-100 last:border-b-0">
              <Text className="text-gray-800 font-medium mb-1">{activity.action}</Text>
              <Text className="text-gray-500 text-sm">{activity.time}</Text>
            </View>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}