"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
}

function StatItem({ number, label, suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < number) {
        setCount(count + 1);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [count, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="glass-input p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
        >
          {count}{suffix}
        </motion.div>
        <p className="text-gray-300 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pencapaian & Pengalaman
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Angka-angka yang mencerminkan perjalanan dan komitmen saya terhadap keunggulan dalam pengembangan
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <StatItem number={15} label="TOTAL PROYEK" suffix="+" />
          <StatItem number={5} label="SERTIFIKAT" />
          <StatItem number={3} label="TAHUN PENGALAMAN" />
          <StatItem number={50} label="KLIEN PUAS" suffix="+" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 italic">
            Solusi web & mobile inovatif yang dibuat dengan passion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
