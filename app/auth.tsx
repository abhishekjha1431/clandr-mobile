import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Calendar } from 'lucide-react-native';

export default function AuthScreen() {
  const handleGoogleAuth = () => {
    Alert.alert('Google Sign In', 'Google authentication would be implemented here');
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Main Content */}
        <View className="flex-1 px-6 pt-20">
          {/* Logo and Title */}
          <View className="items-center mb-16">
            <View className="w-16 h-16 bg-white rounded-2xl items-center justify-center mb-6 shadow-lg">
              <Calendar size={32} color="#3B82F6" />
            </View>
            <Text className="text-white text-4xl font-bold mb-3">EventSync</Text>
            <Text className="text-blue-100 text-lg text-center leading-6">
              Schedule smarter, connect better
            </Text>
          </View>

          {/* Decorative Waves */}
          <View className="absolute top-40 left-0 right-0 h-64 overflow-hidden">
            <View className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full" />
            <View className="absolute -top-32 -right-16 w-64 h-64 bg-white/5 rounded-full" />
            <View className="absolute top-20 left-1/2 w-48 h-48 bg-white/8 rounded-full transform -translate-x-1/2" />
          </View>

          {/* Auth Card */}
          <View className="bg-white rounded-3xl shadow-2xl p-8 mx-2 mt-32 relative z-10">
            {/* Welcome Text */}
            <View className="items-center mb-8">
              <Text className="text-2xl font-bold text-gray-800 mb-2">Welcome</Text>
              <Text className="text-gray-600 text-center text-base">
                Sign in to start organizing your events
              </Text>
            </View>

            {/* Google Sign In Button */}
            <TouchableOpacity
              onPress={handleGoogleAuth}
              className="bg-blue-500 rounded-2xl py-4 flex-row items-center justify-center shadow-lg mb-6"
            >
              <View className="w-6 h-6 bg-white rounded-full mr-3 items-center justify-center">
                <Text className="text-blue-500 text-sm font-bold">G</Text>
              </View>
              <Text className="text-white font-semibold text-lg">
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* Terms */}
            <Text className="text-gray-500 text-xs text-center leading-4">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>

          {/* Bottom Decorative Elements */}
          <View className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
            <View className="absolute -bottom-16 -left-12 w-32 h-32 bg-white/10 rounded-full" />
            <View className="absolute -bottom-20 -right-8 w-24 h-24 bg-white/5 rounded-full" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}