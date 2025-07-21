import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Copy, Edit, Plus } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import EditEventModal from '../../components/EditEventModal';
import eventsData from '../../data/events.json';

interface Event {
  id: number;
  title: string;
  description: string;
  duration: number;
  active: boolean;
  bookings: number;
  created: string;
}

export default function MyEventsScreen() {
  const [events, setEvents] = useState<Event[]>(eventsData as Event[]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const activeEvents = events.filter(event => event.active);
  const inactiveEvents = events.filter(event => !event.active);

  const copyEventDetails = async (event: Event) => {
    const eventText = `${event.title}\n\nDuration: ${event.duration} minutes\n\n${event.description}`;
    await Clipboard.setStringAsync(eventText);
    Alert.alert('Copied!', 'Event details copied to clipboard');
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const handleSaveEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const handleDeleteEvent = (eventId: number) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const EventCard = ({ event, isActive }: { event: Event; isActive: boolean }) => (
    <View className={`bg-white rounded-3xl shadow-lg p-6 mb-4 ${!isActive ? 'opacity-60' : ''}`}>
      {/* Header */}
      <View className="flex-row items-start justify-between mb-4">
        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-800 mb-2">{event.title}</Text>
          <View className="flex-row items-center">
            <View className={`w-3 h-3 rounded-full mr-2 ${isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
            <Text className={`text-sm font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </Text>
          </View>
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity
            onPress={() => copyEventDetails(event)}
            className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center"
          >
            <Copy size={18} color="#3B82F6" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleEditEvent(event)}
            className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center"
          >
            <Edit size={18} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Duration */}
      <View className="bg-blue-50 rounded-2xl p-4 mb-4">
        <Text className="text-blue-600 font-semibold text-lg">{event.duration} minutes</Text>
        <Text className="text-blue-500 text-sm">Duration</Text>
      </View>

      {/* Description */}
      <Text className="text-gray-600 mb-4 leading-6">{event.description}</Text>

      {/* Stats */}
      <View className="flex-row items-center justify-between pt-4 border-t border-gray-100">
        <Text className="text-gray-500 text-sm">{event.bookings} bookings</Text>
        <Text className="text-gray-500 text-sm">Created {new Date(event.created).toLocaleDateString()}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-4 pb-6 px-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-3xl font-bold text-gray-800 mb-2">My Events</Text>
              <Text className="text-gray-600">Manage your bookable events</Text>
            </View>
            <TouchableOpacity className="w-12 h-12 rounded-full bg-blue-500 items-center justify-center shadow-lg">
              <Plus size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row px-4 mb-6 space-x-3">
          <View className="bg-white rounded-3xl shadow-lg p-4 flex-1">
            <Text className="text-2xl font-bold text-blue-600">{activeEvents.length}</Text>
            <Text className="text-gray-600 text-sm">Active Events</Text>
          </View>
          <View className="bg-white rounded-3xl shadow-lg p-4 flex-1">
            <Text className="text-2xl font-bold text-green-600">
              {events.reduce((sum, event) => sum + event.bookings, 0)}
            </Text>
            <Text className="text-gray-600 text-sm">Total Bookings</Text>
          </View>
        </View>

        {/* Active Events */}
        {activeEvents.length > 0 && (
          <View className="px-4 mb-6">
            <Text className="text-xl font-bold text-gray-800 mb-4">Active Events</Text>
            {activeEvents.map((event) => (
              <EventCard key={event.id} event={event} isActive={true} />
            ))}
          </View>
        )}

        {/* Inactive Events */}
        {inactiveEvents.length > 0 && (
          <View className="px-4 mb-6">
            <Text className="text-xl font-bold text-gray-800 mb-4">Inactive Events</Text>
            {inactiveEvents.map((event) => (
              <EventCard key={event.id} event={event} isActive={false} />
            ))}
          </View>
        )}

        {/* Empty State */}
        {events.length === 0 && (
          <View className="bg-white rounded-3xl shadow-lg p-8 mx-4 items-center">
            <Text className="text-gray-500 text-lg mb-2">No events yet</Text>
            <Text className="text-gray-400 text-center">Create your first bookable event to get started</Text>
          </View>
        )}

        {/* Bottom Spacing */}
        <View className="h-20" />
      </ScrollView>

      {/* Edit Modal */}
      <EditEventModal
        visible={modalVisible}
        event={selectedEvent}
        onClose={() => {
          setModalVisible(false);
          setSelectedEvent(null);
        }}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </SafeAreaView>
  );
}