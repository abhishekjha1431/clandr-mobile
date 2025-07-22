import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react-native';

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleGoogleAuth = () => {
    Alert.alert('Google Sign In', 'Google authentication would be implemented here with Clerk');
  };

  const handleEmailAuth = () => {
    if (!email || !password || (isSignUp && !name)) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert(
      isSignUp ? 'Sign Up' : 'Sign In', 
      `${isSignUp ? 'Account created' : 'Signed in'} successfully!`
    );
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

        {/* Auth Form */}
        <View className="px-6 -mt-6">
          <View className="bg-white rounded-3xl shadow-lg p-8">
            {/* Toggle Buttons */}
            <View className="bg-gray-50 rounded-2xl p-1 mb-8 flex-row">
              <TouchableOpacity
                onPress={() => setIsSignUp(false)}
                className={`flex-1 py-3 rounded-xl items-center ${
                  !isSignUp ? 'bg-white shadow-sm' : ''
                }`}
              >
                <Text className={`font-semibold ${
                  !isSignUp ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsSignUp(true)}
                className={`flex-1 py-3 rounded-xl items-center ${
                  isSignUp ? 'bg-white shadow-sm' : ''
                }`}
              >
                <Text className={`font-semibold ${
                  isSignUp ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Welcome Text */}
            <View className="mb-8">
              <Text className="text-2xl font-bold text-gray-800 mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </Text>
              <Text className="text-gray-600">
                {isSignUp 
                  ? 'Start organizing your events today' 
                  : 'Sign in to manage your events'
                }
              </Text>
            </View>

            {/* Form Fields */}
            <View className="space-y-4 mb-6">
              {isSignUp && (
                <View className="bg-gray-50 rounded-2xl p-4 flex-row items-center">
                  <User size={20} color="#6B7280" />
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Full Name"
                    className="flex-1 ml-3 text-gray-800 text-base"
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
              )}

              <View className="bg-gray-50 rounded-2xl p-4 flex-row items-center">
                <Mail size={20} color="#6B7280" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email Address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="flex-1 ml-3 text-gray-800 text-base"
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              <View className="bg-gray-50 rounded-2xl p-4 flex-row items-center">
                <Lock size={20} color="#6B7280" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  className="flex-1 ml-3 text-gray-800 text-base"
                  placeholderTextColor="#9CA3AF"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff size={20} color="#6B7280" />
                  ) : (
                    <Eye size={20} color="#6B7280" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            {!isSignUp && (
              <TouchableOpacity className="mb-6">
                <Text className="text-blue-600 text-center font-medium">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            )}

            {/* Sign In/Up Button */}
            <TouchableOpacity
              onPress={handleEmailAuth}
              className="bg-blue-500 rounded-2xl py-4 items-center shadow-md mb-6"
            >
              <Text className="text-white font-semibold text-lg">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="text-gray-500 px-4 text-sm">or continue with</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Google Sign In */}
            <TouchableOpacity
              onPress={handleGoogleAuth}
              className="bg-white border border-gray-200 rounded-2xl py-4 flex-row items-center justify-center shadow-sm"
            >
              <View className="w-6 h-6 bg-red-500 rounded-full mr-3 items-center justify-center">
                <Text className="text-white text-xs font-bold">G</Text>
              </View>
              <Text className="text-gray-700 font-semibold">
                {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Terms and Privacy */}
          {isSignUp && (
            <Text className="text-gray-500 text-center text-sm mt-6 leading-5 px-4">
              By creating an account, you agree to our{' '}
              <Text className="text-blue-600">Terms of Service</Text> and{' '}
              <Text className="text-blue-600">Privacy Policy</Text>
            </Text>
          )}
        </View>

        {/* Features Section */}
        <View className="px-6 mt-8 mb-8">
          <Text className="text-xl font-bold text-gray-800 mb-6 text-center">
            Why Choose EventSync?
          </Text>
          
          <View className="space-y-4">
            {[
              {
                icon: '📅',
                title: 'Smart Scheduling',
                description: 'AI-powered scheduling that finds the perfect time for everyone'
              },
              {
                icon: '🔗',
                title: 'Easy Sharing',
                description: 'Share your availability with a simple, beautiful link'
              },
              {
                icon: '📊',
                title: 'Analytics',
                description: 'Track your bookings and optimize your schedule'
              }
            ].map((feature, index) => (
              <View key={index} className="bg-white rounded-2xl p-4 shadow-sm flex-row items-center">
                <Text className="text-2xl mr-4">{feature.icon}</Text>
                <View className="flex-1">
                  <Text className="text-gray-800 font-semibold mb-1">{feature.title}</Text>
                  <Text className="text-gray-600 text-sm">{feature.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Bottom Spacing */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}