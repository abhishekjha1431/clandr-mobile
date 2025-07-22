import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { User } from 'lucide-react-native';

export default function AuthScreen() {
  const handleGoogleAuth = () => {
    Alert.alert('Google Sign In', 'Google authentication would be implemented here with Clerk');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View className="bg-gradient-to-br from-blue-500 to-blue-600 pt-16 pb-12 px-6">
          <View className="items-center">
            <View className="w-20 h-20 bg-white rounded-3xl items-center justify-center mb-6 shadow-lg">
              <User size={32} color="#3B82F6" />
            </View>
            <Text className="text-white text-3xl font-bold mb-3">EventSync</Text>
            <Text className="text-blue-100 text-center text-lg leading-6">
              Schedule smarter, connect better.{'\n'}Your events, perfectly organized.
            </Text>
          </View>
        </View>

        {/* Auth Section */}
        <View className="px-6 -mt-6">
          <View className="bg-white rounded-3xl shadow-lg p-8">
            {/* Welcome Text */}
            <View className="mb-8 items-center">
              <Text className="text-2xl font-bold text-gray-800 mb-2">Welcome</Text>
              <Text className="text-gray-600 text-center">
                Sign in to start managing your events
              </Text>
            </View>

            {/* Google Sign In Button */}
            <TouchableOpacity
              onPress={handleGoogleAuth}
              className="bg-white border border-gray-200 rounded-2xl py-4 flex-row items-center justify-center shadow-sm"
            >
              <View className="w-6 h-6 bg-red-500 rounded-full mr-3 items-center justify-center">
                <Text className="text-white text-xs font-bold">G</Text>
              </View>
              <Text className="text-gray-700 font-semibold text-lg">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}