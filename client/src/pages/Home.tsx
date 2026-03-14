// California Sunshine Design - Home Page
// 美国家庭旅行行程可视化网站

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CityOverview from '@/components/CityOverview';
import HotelInfo from '@/components/HotelInfo';
import ExpenseTracker from '@/components/ExpenseTracker';
import ExpenseVisualization from '@/components/ExpenseVisualization';
import TicketTracker from '@/components/TicketTracker';
import VerticalTimeline from '@/components/VerticalTimeline';


import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF2]">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* City Overview */}
      <CityOverview />
      
      {/* Hotels Section */}
      <section id="hotels">
        <HotelInfo />
      </section>
      
      {/* Ticket Tracker Section */}
      <TicketTracker />
      
      {/* Expense Visualization Section */}
      <ExpenseVisualization />
      
      {/* Expense Tracker Section */}
      <ExpenseTracker />
      
      {/* Daily Schedule - New Vertical Timeline */}
      <VerticalTimeline />
      

      {/* Footer */}
      <Footer />
    </div>
  );
}
