import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ToggleButtonWithIcon } from './ToggleButtonWithIcon';

// よく使うアイコンのリスト
const iconOptions = [
  'CircleDotDashed',
  'CircleDot',
  'Armchair',
  'Coffee',
  'Car',
  'Home',
  'Building',
  'Sun',
  'Moon',
  'Play',
  'Pause',
  'Power',
  'PowerOff',
  'Zap',
  'ZapOff',
  'Wifi',
  'WifiOff',
  'Volume2',
  'VolumeX',
  'Eye',
  'EyeOff',
  'Lock',
  'Unlock',
  'Check',
  'X',
  'Heart',
  'Star',
  'Settings',
  'User',
];

const meta = {
  title: 'Components/ToggleButtonWithIcon',
  component: ToggleButtonWithIcon,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f5' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['rounded', 'square'],
    },
    accentColor: {
      control: { type: 'select' },
      options: ['orange', 'blue', 'purple', 'green', 'red'],
    },
    defaultValue: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    leftIcon: {
      control: { type: 'select' },
      options: iconOptions,
      table: { type: { summary: 'LucideIconName | ReactNode' } },
    },
    rightIcon: {
      control: { type: 'select' },
      options: iconOptions,
      table: { type: { summary: 'LucideIconName | ReactNode' } },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof ToggleButtonWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 丸形スライドトグル（オレンジ）- 左選択 */
export const RoundedOrangeLeft: Story = {
  args: {
    variant: 'rounded',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Armchair',
    leftLabel: 'Drive',
    rightLabel: 'Relax',
    accentColor: 'orange',
    defaultValue: 'left',
  },
};

/** 丸形スライドトグル（オレンジ）- 右選択 */
export const RoundedOrangeRight: Story = {
  args: {
    variant: 'rounded',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Armchair',
    leftLabel: 'Drive',
    rightLabel: 'Relax',
    accentColor: 'orange',
    defaultValue: 'right',
  },
};

/** 丸形スライドトグル（ブルー）- 左選択 */
export const RoundedBlueLeft: Story = {
  args: {
    variant: 'rounded',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Armchair',
    leftLabel: 'Drive',
    rightLabel: 'Relax',
    accentColor: 'blue',
    defaultValue: 'left',
  },
};

/** 丸形スライドトグル（ブルー）- 右選択 */
export const RoundedBlueRight: Story = {
  args: {
    variant: 'rounded',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Armchair',
    leftLabel: 'Drive',
    rightLabel: 'Relax',
    accentColor: 'blue',
    defaultValue: 'right',
  },
};

/** 四角形セグメント（オレンジ）- 左選択 */
export const SquareOrangeLeft: Story = {
  args: {
    variant: 'square',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Coffee',
    leftLabel: 'Driving',
    rightLabel: 'Passenger',
    accentColor: 'orange',
    defaultValue: 'left',
  },
};

/** 四角形セグメント（パープル）- 右選択 */
export const SquarePurpleRight: Story = {
  args: {
    variant: 'square',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Coffee',
    leftLabel: 'Driving',
    rightLabel: 'Passenger',
    accentColor: 'purple',
    defaultValue: 'right',
  },
};

/** ダークモード切替 */
export const DarkModeToggle: Story = {
  args: {
    variant: 'rounded',
    leftIcon: 'Sun',
    rightIcon: 'Moon',
    leftLabel: 'Light',
    rightLabel: 'Dark',
    accentColor: 'blue',
    defaultValue: 'left',
  },
};

/** 電源スイッチ */
export const PowerToggle: Story = {
  args: {
    variant: 'square',
    leftIcon: 'Power',
    rightIcon: 'PowerOff',
    leftLabel: 'ON',
    rightLabel: 'OFF',
    accentColor: 'green',
    defaultValue: 'left',
  },
};

/** 無効状態 */
export const Disabled: Story = {
  args: {
    variant: 'rounded',
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Armchair',
    leftLabel: 'Drive',
    rightLabel: 'Relax',
    accentColor: 'orange',
    disabled: true,
  },
};

/** 全バリエーション（画像と同じレイアウト） */
export const AllVariants: Story = {
  args: {
    leftIcon: 'CircleDotDashed',
    rightIcon: 'Armchair',
    leftLabel: 'Drive',
    rightLabel: 'Relax',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '48px', padding: '32px' }}>
      {/* IDEA 1: SLIDE TOGGLE SWITCH */}
      <div>
        <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#666', marginBottom: '24px', letterSpacing: '1px' }}>
          IDEA 1: SLIDE TOGGLE SWITCH
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ToggleButtonWithIcon
            variant="rounded"
            leftIcon="CircleDotDashed"
            rightIcon="Armchair"
            leftLabel="Drive"
            rightLabel="Relax"
            accentColor="orange"
            defaultValue="left"
          />
          <ToggleButtonWithIcon
            variant="rounded"
            leftIcon="CircleDotDashed"
            rightIcon="Armchair"
            leftLabel="Drive"
            rightLabel="Relax"
            accentColor="blue"
            defaultValue="right"
          />
        </div>
      </div>

      {/* IDEA 2: ICON SEGMENTED CONTROL */}
      <div>
        <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#666', marginBottom: '24px', letterSpacing: '1px' }}>
          IDEA 2: ICON SEGMENTED CONTROL
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ToggleButtonWithIcon
            variant="square"
            leftIcon="CircleDotDashed"
            rightIcon="Coffee"
            leftLabel="Driving"
            rightLabel="Passenger"
            accentColor="orange"
            defaultValue="left"
          />
          <ToggleButtonWithIcon
            variant="square"
            leftIcon="CircleDotDashed"
            rightIcon="Coffee"
            leftLabel="Driving"
            rightLabel="Passenger"
            accentColor="purple"
            defaultValue="right"
          />
        </div>
      </div>
    </div>
  ),
};
