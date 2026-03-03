import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  MessageCircle,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

type Language = "EN" | "VN" | "TH";

const translations = {
  EN: {
    nav: ["Strengths", "Products", "Certifications", "Contact"],
    banner: {
      title: "Premium Korean Seafood: Fresh from the Sea to Your Table",
      subtitle: "Trustworthy seafood partner supplying products safe enough for our own children."
    },
    strengths: {
      title: "3 Core Strengths",
      items: [
        { title: "Premium K-SEAFOOD", desc: "Sourced from clean Korean waters, guaranteeing exceptional taste and quality using only top-grade materials." },
        { title: "Advanced IQF Technology", desc: "Steamed and Individually Quick Frozen (IQF) to preserve the freshness and texture as if just caught." },
        { title: "Proven B2B Partner", desc: "Verified stable supply chain with HACCP-based production and experience supplying major franchises (e.g., Dookki) in Vietnam." }
      ]
    },
    products: {
      title: "Key Product Line-up",
      categories: [
        {
          name: "Premium Shellfish & Meat",
          keyPoint: "IQF and pre-boiled products ready for immediate cooking without tedious preparation.",
          items: [
            {
              name: "Boiled Mussel Meat",
              desc: "Shelled, steamed, and flash-frozen for maximum cooking convenience.",
              spec: "Origin: Korea / Feature: IQF, No Shell, Ready to cook",
              image: "https://lh3.googleusercontent.com/d/1EL6JTzXMGlOPa7pd3FcD4nEiR8HkTE01"
            },
            {
              name: "Boiled Cockle Meat",
              desc: "Fully de-sanded, cleaned, deshelled, and steamed. (For Pasta, Stews)",
              spec: "Origin: Korea / Feature: Cleaned, Pre-boiled",
              image: "https://lh3.googleusercontent.com/d/1rFZjERx8aupUPDxs3TC2tWAiBU40jCiv"
            },
            {
              name: "Frozen Oysters",
              desc: "IQF (Individually Quick Frozen) to minimize moisture loss and keep plump texture.",
              spec: "Spec: 6.5kg (Box) / Feature: High moisture retention",
              image: "https://lh3.googleusercontent.com/d/1SBo7HDHexga7COsRAyRuJOmxAHpGq4DZ"
            }
          ]
        },
        {
          name: "Crustaceans & Cephalopods",
          keyPoint: "Flash-frozen technology to preserve the natural freshness of the raw materials.",
          items: [
            {
              name: "Cut Swimming Crab",
              desc: "Pre-cut for convenience and flash-frozen to keep meat firm and fresh.",
              spec: "Usage: Spicy Crab Stew, Crab Curry (Pu Phat Phong Curry)",
              image: "https://lh3.googleusercontent.com/d/1b4DjEA46LwGTNJsnsprEgvQ-JCmiMuk0"
            },
            {
              name: "Frozen Live Octopus",
              desc: "Flash-frozen while alive to maintain optimal elasticity after thawing.",
              spec: "Feature: High Freshness, Unprocessed",
              image: "https://lh3.googleusercontent.com/d/1q8NMsJ0nB5i9YsmSbLunv77CuSF7btvL"
            }
          ]
        },
        {
          name: "Sushi & Value-Added Items",
          keyPoint: "Standardized products optimized for professional sushi restaurants and buffets.",
          items: [
            {
              name: "Sushi Egg Garnish",
              desc: "[Slice/Strip] Ready-to-serve. Sweet, savory flavor with soft texture.",
              spec: "Spec: 500g x 16 packs (Box) / Shelf Life: 12 months (Frozen)",
              image: "https://lh3.googleusercontent.com/d/1wyG3Oh1_1yYEdRtvmxPyS5PpdIY10mKI"
            },
            {
              name: "Roasted Freshwater Eel",
              desc: "Large, thick freshwater eel roasted with traditional sauce.",
              spec: "Usage: Eel Rice Bowl (Unadon), Premium Sushi",
              image: "https://lh3.googleusercontent.com/d/1LsfL4XciOQ_lbcPvUAu_9jPw_oyD008-"
            }
          ]
        },
        {
          name: "Strategic New Arrival",
          keyPoint: "Strategic items developed for overseas franchises like 'Dookki'.",
          items: [
            {
              name: "Red Scallop / Hong-Garibi",
              desc: "Premium scallops with vibrant red shells. Processed to minimize fishy odor.",
              spec: "Usage: Hot pot topping, Steamed dish (Strategic item for Franchises)",
              image: "https://lh3.googleusercontent.com/d/1kthCfHg1yl-IvODk6TBGSvufviSvOiKM"
            }
          ]
        }
      ]
    },
    credibility: {
      title: "Global Standard & Awards",
      cert: "Certifications: ISO 9001, ISO 14001 Certified",
      awards: "Awards: Commendation from the Minister of Oceans and Fisheries (Korea), Busan Mayor's Award",
      export: "Export Record: Exporting to USA, Vietnam (Supplying to 'Dookki'), and Japan (Aeon Mall)"
    },
    contact: {
      title: "Inquiry",
      subtitle: "Your Best Partner for Business Success, WOW SEAFOOD.",
      desc: "Contact us today for exports, bulk orders, or sample inquiries.",
      form: {
        name: "Name/Company",
        email: "Email",
        msg: "Message",
        btn: "Send Inquiry"
      }
    },
    footer: {
      addr: "190-1, Seonsuchon-ro, Haeundae-gu, Busan, South Korea"
    }
  },
  VN: {
    nav: ["Thế mạnh", "Sản phẩm", "Chứng nhận", "Liên hệ"],
    banner: {
      title: "Hải sản Hàn Quốc cao cấp: Tươi ngon từ biển cả đến bàn ăn",
      subtitle: "Đối tác tin cậy cung cấp hải sản an toàn, chất lượng như dành cho chính gia đình bạn."
    },
    strengths: {
      title: "3 Thế mạnh cốt lõi",
      items: [
        { title: "K-SEAFOOD Thượng hạng", desc: "Được khai thác từ vùng biển sạch Hàn Quốc, cam kết hương vị và chất lượng tuyệt hảo." },
        { title: "Công nghệ IQF", desc: "Hấp và cấp đông siêu tốc (IQF) giúp giữ nguyên độ tươi ngon và kết cấu như vừa mới đánh bắt." },
        { title: "Đối tác B2B uy tín", desc: "Quy trình sản xuất chuẩn HACCP và chuỗi cung ứng ổn định, đã được kiểm chứng qua việc cung cấp cho các chuỗi lớn (như Dookki)." }
      ]
    },
    products: {
      title: "Sản phẩm chủ lực",
      categories: [
        {
          name: "Phân nhóm A: Hải sản & Thịt cao cấp",
          keyPoint: "Sản phẩm IQF và hấp chín, sẵn sàng chế biến ngay mà không cần chuẩn bị cầu kỳ.",
          items: [
            {
              name: "Thịt vẹm luộc",
              desc: "Thịt vẹm đã tách vỏ, hấp chín và cấp đông nhanh, cực kỳ tiện lợi.",
              spec: "Xuất xứ: Hàn Quốc / Đặc điểm: IQF, Không vỏ, Sẵn sàng chế biến",
              image: "https://lh3.googleusercontent.com/d/1EL6JTzXMGlOPa7pd3FcD4nEiR8HkTE01"
            },
            {
              name: "Thịt ngao luộc",
              desc: "Thịt ngao đã làm sạch cát, tách vỏ và hấp chín. (Dùng cho Mỳ Ý, Canh)",
              spec: "Xuất xứ: Hàn Quốc / Đặc điểm: Đã làm sạch, Luộc sơ",
              image: "https://lh3.googleusercontent.com/d/1rFZjERx8aupUPDxs3TC2tWAiBU40jCiv"
            },
            {
              name: "Hàu đông lạnh",
              desc: "Hàu cấp đông rời (IQF) giúp giảm thiểu mất nước, giữ nguyên độ mọng.",
              spec: "Quy cách: 6.5kg (Thùng) / Đặc điểm: Giữ ẩm cao",
              image: "https://lh3.googleusercontent.com/d/1SBo7HDHexga7COsRAyRuJOmxAHpGq4DZ"
            }
          ]
        },
        {
          name: "Phân nhóm B: Giáp xác & Thân mềm",
          keyPoint: "Công nghệ cấp đông nhanh giúp giữ nguyên độ tươi ngon của nguyên liệu.",
          items: [
            {
              name: "Ghẹ cắt khúc",
              desc: "Ghẹ cắt khúc, cấp đông nhanh giúp thịt chắc và tươi ngon.",
              spec: "Sử dụng: Lẩu ghẹ cay, Cà ri ghẹ (Pu Phat Phong Curry)",
              image: "https://lh3.googleusercontent.com/d/1b4DjEA46LwGTNJsnsprEgvQ-JCmiMuk0"
            },
            {
              name: "Bạch tuộc sống đông lạnh",
              desc: "Bạch tuộc sống cấp đông giữ nguyên độ dai giòn sau khi rã đông.",
              spec: "Đặc điểm: Độ tươi cao, Chưa qua chế biến",
              image: "https://lh3.googleusercontent.com/d/1q8NMsJ0nB5i9YsmSbLunv77CuSF7btvL"
            }
          ]
        },
        {
          name: "Phân nhóm C: Đồ Nhật & Thực phẩm GTGT",
          keyPoint: "Sản phẩm quy chuẩn tối ưu cho các nhà hàng Sushi chuyên nghiệp và buffet.",
          items: [
            {
              name: "Trứng cuộn Sushi",
              desc: "[Cắt lát/Sợi] Dùng ngay sau rã đông. Vị ngọt đặc trưng, mềm mịn.",
              spec: "Quy cách: 500g x 16 gói (Thùng) / HSD: 12 tháng (Đông lạnh)",
              image: "https://lh3.googleusercontent.com/d/1wyG3Oh1_1yYEdRtvmxPyS5PpdIY10mKI"
            },
            {
              name: "Lươn nướng sốt",
              desc: "Lươn nước ngọt nướng sốt truyền thống, miếng to và dày thịt.",
              spec: "Sử dụng: Cơm lươn (Unadon), Sushi cao cấp",
              image: "https://lh3.googleusercontent.com/d/1LsfL4XciOQ_lbcPvUAu_9jPw_oyD008-"
            }
          ]
        },
        {
          name: "Phân nhóm D: Sản phẩm chiến lược mới",
          keyPoint: "Các mặt hàng chiến lược được phát triển cho các chuỗi nhượng quyền nước ngoài như 'Dookki'.",
          items: [
            {
              name: "Sò điệp đỏ / Hong-Garibi",
              desc: "Sò điệp đỏ cao cấp với màu sắc bắt mắt. Đã qua xử lý khử mùi tanh.",
              spec: "Sử dụng: Topping lẩu, món hấp (Mặt hàng chiến lược cho chuỗi)",
              image: "https://lh3.googleusercontent.com/d/1kthCfHg1yl-IvODk6TBGSvufviSvOiKM"
            }
          ]
        }
      ]
    },
    credibility: {
      title: "Tiêu chuẩn Toàn cầu & Giải thưởng",
      cert: "Chứng nhận: Đạt chuẩn ISO 9001, ISO 14001",
      awards: "Giải thưởng: Bằng khen từ Bộ trưởng Bộ Hải dương và Thủy sản Hàn Quốc, Giải thưởng Thị trưởng Busan",
      export: "Thành tích xuất khẩu: Xuất khẩu sang Mỹ, Nhật Bản (Aeon Mall), và Việt Nam (Cung cấp cho chuỗi 'Dookki')"
    },
    contact: {
      title: "Liên hệ",
      subtitle: "WOW SEAFOOD - Đối tác tốt nhất cho thành công của bạn.",
      desc: "Liên hệ ngay để được tư vấn về xuất khẩu, đặt hàng số lượng lớn hoặc yêu cầu hàng mẫu.",
      form: {
        name: "Tên/Công ty",
        email: "Email",
        msg: "Nội dung",
        btn: "Gửi yêu cầu"
      }
    },
    footer: {
      addr: "190-1, Seonsuchon-ro, Haeundae-gu, Busan, Hàn Quốc"
    }
  },
  TH: {
    nav: ["จุดแข็ง", "สินค้า", "การรับรอง", "ติดต่อ"],
    banner: {
      title: "อาหารทะเลเกาหลีพรีเมียม: สดจากทะเลสู่โต๊ะอาหารของคุณ",
      subtitle: "คู่ค้าที่คุณวางใจได้ พร้อมส่งมอบอาหารทะเลที่ปลอดภัย เหมือนคัดสรรให้ลูกหลานของเราเอง"
    },
    strengths: {
      title: "3 จุดแข็งหลักของ WOW SEAFOOD",
      items: [
        { title: "K-SEAFOOD คุณภาพเยี่ยม", desc: "คัดสรรจากแหล่งน้ำที่สะอาดของเกาหลี การันตีรสชาติและคุณภาพระดับพรีเมียม" },
        { title: "เทคโนโลยี IQF", desc: "ผ่านการนึ่งและแช่แข็งแบบด่วน (IQF) เพื่อคงความสดและรสสัมผัสเหมือนเพิ่งจับจากทะเล" },
        { title: "คู่ค้า B2B ที่น่าเชื่อถือ", desc: "การผลิตมาตรฐาน HACCP และมีประสบการณ์ส่งมอบให้แฟรนไชส์ใหญ่ในเวียดนาม (เช่น Dookki)" }
      ]
    },
    products: {
      title: "ไลน์ผลิตภัณฑ์หลัก",
      categories: [
        {
          name: "กลุ่ม A: อาหารทะเลและเนื้อพรีเมียม",
          keyPoint: "ผลิตภัณฑ์ IQF และต้มสุก พร้อมปรุงทันทีโดยไม่ต้องเตรียมการที่ยุ่งยาก",
          items: [
            {
              name: "เนื้อหอยแมลงภู่ต้ม",
              desc: "เนื้อหอยแมลงภู่ต้ม เลาะเปลือก นึ่ง และแช่แข็งด่วน สะดวกต่อการปรุงอาหาร",
              spec: "แหล่งกำเนิด: เกาหลี / คุณสมบัติ: IQF, ไม่มีเปลือก, พร้อมปรุง",
              image: "https://lh3.googleusercontent.com/d/1EL6JTzXMGlOPa7pd3FcD4nEiR8HkTE01"
            },
            {
              name: "เนื้อหอยลายต้ม",
              desc: "เนื้อหอยลาย ผ่านการล้างทราย เลาะเปลือก และต้มสุก (สำหรับพาสต้า, แกง)",
              spec: "แหล่งกำเนิด: เกาหลี / คุณสมบัติ: สะอาด, ต้มสุกเบื้องต้น",
              image: "https://lh3.googleusercontent.com/d/1rFZjERx8aupUPDxs3TC2tWAiBU40jCiv"
            },
            {
              name: "หอยนางรมแช่แข็ง",
              desc: "หอยนางรมแช่แข็ง IQF คงความชุ่มฉ่ำและลดการสูญเสียน้ำ",
              spec: "ขนาด: 6.5 กก. (กล่อง) / คุณสมบัติ: กักเก็บความชุ่มชื้นสูง",
              image: "https://lh3.googleusercontent.com/d/1SBo7HDHexga7COsRAyRuJOmxAHpGq4DZ"
            }
          ]
        },
        {
          name: "กลุ่ม B: สัตว์น้ำเปลือกแข็งและสัตว์น้ำไม่มีกระดูกสันหลัง",
          keyPoint: "เทคโนโลยีแช่แข็งด่วนเพื่อคงความสดตามธรรมชาติของวัตถุดิบ",
          items: [
            {
              name: "ปูม้าตัดแต่ง",
              desc: "ปูม้าตัดแต่ง แช่แข็งด่วน เนื้อแน่นสดใหม่ สะดวกพร้อมปรุง",
              spec: "การใช้งาน: แกงส้มปู, ปูผัดผงกะหรี่",
              image: "https://lh3.googleusercontent.com/d/1b4DjEA46LwGTNJsnsprEgvQ-JCmiMuk0"
            },
            {
              name: "ปลาหมึกสายสดแช่แข็ง",
              desc: "ปลาหมึกสายสดแช่แข็ง คงความเด้งกรอบเหมือนใหม่หลังละลาย",
              spec: "คุณสมบัติ: ความสดสูง, ไม่ผ่านการแปรรูป",
              image: "https://lh3.googleusercontent.com/d/1q8NMsJ0nB5i9YsmSbLunv77CuSF7btvL"
            }
          ]
        },
        {
          name: "กลุ่ม C: อาหารญี่ปุ่นและสินค้าเพิ่มมูลค่า",
          keyPoint: "ผลิตภัณฑ์มาตรฐานที่ปรับให้เหมาะกับร้านซูชิมืออาชีพและบุฟเฟต์",
          items: [
            {
              name: "ไข่หวานสำหรับซูชิ",
              desc: "[สไลซ์/เส้น] พร้อมทาน รสหวานกลมกล่อม เนื้อนุ่ม",
              spec: "ขนาด: 500 กรัม x 16 แพ็ค (กล่อง) / อายุการเก็บรักษา: 12 เดือน (แช่แข็ง)",
              image: "https://lh3.googleusercontent.com/d/1wyG3Oh1_1yYEdRtvmxPyS5PpdIY10mKI"
            },
            {
              name: "ปลาไหลน้ำจืดย่าง",
              desc: "ปลาไหลน้ำจืดย่างซอสสูตรดั้งเดิม ชิ้นใหญ่เนื้อหนา",
              spec: "การใช้งาน: ข้าวหน้าปลาไหล (Unadon), ซูชิพรีเมียม",
              image: "https://lh3.googleusercontent.com/d/1LsfL4XciOQ_lbcPvUAu_9jPw_oyD008-"
            }
          ]
        },
        {
          name: "กลุ่ม D: สินค้าใหม่เชิงกลยุทธ์",
          keyPoint: "รายการเชิงกลยุทธ์ที่พัฒนาขึ้นสำหรับแฟรนไชส์ต่างประเทศ เช่น 'Dookki'",
          items: [
            {
              name: "หอยเชลล์แดง / Hong-Garibi",
              desc: "หอยเชลล์แดงพรีเมียม สีสันน่ารับประทาน ผ่านกระบวนการลดกลิ่นคาว",
              spec: "การใช้งาน: ท็อปปิ้งหม้อไฟ, เมนูนึ่ง (สินค้าเชิงกลยุทธ์สำหรับแฟรนไชส์)",
              image: "https://lh3.googleusercontent.com/d/1kthCfHg1yl-IvODk6TBGSvufviSvOiKM"
            }
          ]
        }
      ]
    },
    credibility: {
      title: "มาตรฐานระดับโลกและรางวัลการันตี",
      cert: "การรับรอง: ได้รับมาตรฐาน ISO 9001 และ ISO 14001",
      awards: "รางวัล: ได้รับเกียรติบัตรจากรัฐมนตรีว่าการกระทรวงมหาสมุทรและการประมง (เกาหลี)",
      export: "ผลงานการส่งออก: ส่งออกไปยังสหรัฐอเมริกา, เวียดนาม (ซัพพลายเออร์ของ 'Dookki'), และญี่ปุ่น (Aeon Mall)"
    },
    contact: {
      title: "ติดต่อสอบถาม",
      subtitle: "WOW SEAFOOD คู่ค้าที่ดีที่สุดเพื่อความสำเร็จทางธุรกิจของคุณ",
      desc: "ติดต่อเราได้ทันทีสำหรับการส่งออก การสั่งซื้อจำนวนมาก หรือขอตัวอย่างสินค้า",
      form: {
        name: "ชื่อ/บริษัท",
        email: "อีเมล",
        msg: "ข้อความ",
        btn: "ส่งข้อความ"
      }
    },
    footer: {
      addr: "190-1, Seonsuchon-ro, Haeundae-gu, Busan, South Korea"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const t = translations[lang];

  const bannerImages = [
    "https://lh3.googleusercontent.com/d/1taCJFWgmhxVimBab_0cx0puAHUka1Tpa",
    "https://lh3.googleusercontent.com/d/1kthCfHg1yl-IvODk6TBGSvufviSvOiKM",
    "https://lh3.googleusercontent.com/d/1h-N_j0FyNgB2YE5kfO4PFNNPq5cLTF01",
    "https://lh3.googleusercontent.com/d/11NfzzQiKNUCCGAb2IPS2YaLQHLl-0BfR",
    "https://lh3.googleusercontent.com/d/1vGRwoKO7eaePrroS2uMsxo5VMDZWSVRJ",
    "https://lh3.googleusercontent.com/d/1tzru3wLs0tBocMYdmmfN152jmcVYbLo-"
  ];

  const logoUrl = "https://lh3.googleusercontent.com/d/1vgO7hOV3_kdU5v_kwWRlYzWdo1s51vmC";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const languages: { code: Language; label: string }[] = [
    { code: "EN", label: "EN" },
    { code: "VN", label: "VN" },
    { code: "TH", label: "TH" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1vgO7hOV3_kdU5v_kwWRlYzWdo1s51vmC" 
              alt="WOW SEAFOOD Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {t.nav.map((item, i) => (
              <a 
                key={i} 
                href={`#section-${i}`} 
                className="text-sm font-semibold text-slate-600 hover:text-deepblue transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === l.code 
                    ? "bg-deepblue text-white shadow-md" 
                    : "text-slate-500 hover:text-deepblue"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-4">
                {t.nav.map((item, i) => (
                  <a 
                    key={i} 
                    href={`#section-${i}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-slate-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-deepblue overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBanner}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={bannerImages[currentBanner]} 
                  alt="Ocean Background" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-deepblue/60 via-deepblue/40 to-deepblue" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-block bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
              >
                <motion.img 
                  src={logoUrl} 
                  alt="WOW SEAFOOD Logo" 
                  className="h-16 md:h-20 w-auto object-contain"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
                {t.banner.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 font-medium drop-shadow-md">
                {t.banner.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#section-3" 
                  className="w-full sm:w-auto px-10 py-5 bg-blue-500 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/40 flex items-center justify-center gap-2 group"
                >
                  {t.contact.form.btn}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Strengths */}
        <section id="section-0" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4">
                {t.strengths.title}
              </h2>
              <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.strengths.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    {i === 0 && <Globe className="w-8 h-8" />}
                    {i === 1 && <Zap className="w-8 h-8" />}
                    {i === 2 && <ShieldCheck className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-deepblue mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Products */}
        <section id="section-1" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4">
                {t.products.title}
              </h2>
              <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-20">
              {t.products.categories.map((category, catIdx) => (
                <div key={catIdx}>
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-deepblue mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm">
                        {String.fromCharCode(65 + catIdx)}
                      </span>
                      {category.name}
                    </h3>
                    <p className="text-blue-600 font-medium italic">
                      * {category.keyPoint}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((product, prodIdx) => (
                      <motion.div 
                        key={prodIdx}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full"
                      >
                        <div className="overflow-hidden relative bg-slate-50">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-auto block"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h4 className="text-xl font-bold text-deepblue mb-4">{product.name}</h4>
                          <div className="space-y-3 mb-6 flex-grow">
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {product.desc}
                            </p>
                            <div className="pt-3 border-t border-slate-100">
                              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Specs & Features</p>
                              <p className="text-slate-500 text-xs italic">
                                • {product.spec}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section id="section-2" className="py-24 bg-deepblue text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.credibility.title}</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Certifications</h4>
                      <p className="text-blue-100/70">{t.credibility.cert}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Award className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Awards</h4>
                      <p className="text-blue-100/70">{t.credibility.awards}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Globe className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Export Record</h4>
                      <p className="text-blue-100/70">{t.credibility.export}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://lh3.googleusercontent.com/d/1iI21v2uIV9Zbtv318i5XH6tXwGFaM-7H" alt="Certification 1" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
                <img src="https://lh3.googleusercontent.com/d/11hZNZigLlDRs07_J6y00hOWz1zQjoj8l" alt="Certification 2" className="rounded-2xl shadow-2xl mt-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="section-3" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-deepblue mb-6">{t.contact.title}</h2>
                <p className="text-xl font-bold text-blue-600 mb-4">{t.contact.subtitle}</p>
                <p className="text-slate-600 mb-12 text-lg">{t.contact.desc}</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-deepblue">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-slate-700">+82-51-527-8907</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-deepblue">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-slate-700">wowseafood@naver.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-deepblue">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-slate-700">{t.footer.addr}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.msg}</label>
                    <textarea 
                      rows={4}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <button className="w-full py-5 bg-deepblue text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
                    {t.contact.form.btn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-white p-2 rounded-lg">
            <img 
              src="https://lh3.googleusercontent.com/d/1vgO7hOV3_kdU5v_kwWRlYzWdo1s51vmC" 
              alt="WOW SEAFOOD Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
          <p className="text-sm">© {new Date().getFullYear()} WOW SEAFOOD. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-btn">
        <a 
          href="https://zalo.me/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-zalo"
          title="Zalo (Vietnam)"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a 
          href="https://line.me/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-line"
          title="LINE (Thailand)"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
