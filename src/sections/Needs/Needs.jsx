import { motion } from 'framer-motion';
import FileIcon from '../../assets/File.png';
import FamilyIcon from '../../assets/Family.png';
import GovtIcon from '../../assets/Govt.png';
import HouseIcon from '../../assets/House.png';
import BankIcon from '../../assets/Bank.png';
import Section from '../../components/UI/Section';
import Card from '../../components/UI/Card';

const needsData = [
  {
    icon: FileIcon, 
    title: 'Ensures Asset Distribution According to Your Wishes',
    description:
      'Your Will clearly outlines who inherits what, avoiding confusion and unintended allocation of assets.',
  },
  {
    icon: FamilyIcon,
    title: 'Prevents Family Disputes',
    description:
      'In the absence of clear instructions, disagreements can arise among beneficiaries, causing unnecessary stress and strain on relationships.',
  },
  {
    icon: GovtIcon,
    title: 'Avoids Government Intervention',
    description:
      'Without a Will, courts follow Sharia distribution rules, which may not reflect your intentions.',
  },
  {
    icon: HouseIcon,
    title: 'Secures Guardianship for Your Children',
    description: 'You can appoint legal guardians, ensuring your children are cared for by someone you trust.',
  },
  {
    icon: BankIcon,
    title: 'Streamlines Wealth Transfer',
    description:
      'A registered Will speeds up the legal process, allowing your beneficiaries to access funds and assets without prolonged delays.',
  },
];

const Needs = () => {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary-900 font-bold mb-6"
        >
          Why You Need a Will
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-600 text-lg"
        >
          Many people delay creating a Will, assuming it's only necessary later in life. However, in the UAE's legal context, having a Will is
          an urgent and essential step for anyone with assets, dependents, or business interests here.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {needsData.map((need, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary-100 rounded-full">
                <img src={need.icon} alt={need.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{need.title}</h3>
              <p className="text-neutral-600">{need.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Needs;
