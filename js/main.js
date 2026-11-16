// Arunima Agro Enterprises - Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // Navbar Scroll Shadow
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Tractor HP Matcher
  const hpPills = document.querySelectorAll('.hp-pill');
  const hpResultsContainer = document.getElementById('hpResultsContainer');

  const hpData = {
    '30-40': [
      {
        name: 'Mini Rotary Tiller (4 Feet)',
        category: 'Tillage',
        hp: '30 - 35 HP',
        desc: 'Ideal for orchards, vineyards, inter-cultivation, and compact tractors with exceptional fuel economy.',
        blades: '30 / 36 L/C Blades'
      },
      {
        name: 'Zero Till Seed Drill',
        category: 'Sowing',
        hp: '35 - 40 HP',
        desc: 'Direct seed planting in unprepared soil without prior tillage, saving fuel and conserving moisture.',
        blades: '9 / 11 Tynes'
      }
    ],
    '40-50': [
      {
        name: 'Jagro H2 Regular Rotavator (5-6 Feet)',
        category: 'Tillage',
        hp: '40 - 50 HP',
        desc: 'Multi-speed gearbox rotavator designed for wet and dry soil preparation with boron steel blades.',
        blades: '42 / 48 L-Type Blades'
      },
      {
        name: 'Inter-Row Weeder / Cultivator',
        category: 'Cultivation',
        hp: '45 - 50 HP',
        desc: 'Precision weeding and aeration for cotton, maize, sugarcane, and vegetables without root damage.',
        blades: '3 - 5 Row Units'
      }
    ],
    '50-60': [
      {
        name: 'Jagler EX Pro Super Seeder (7 Feet)',
        category: 'Sowing & Residue',
        hp: '50 - 60 HP',
        desc: 'All-in-one paddy stubble management and wheat sowing machine with uniform seed-cum-fertilizer delivery.',
        blades: '54 / 60 Heavy J-Blades'
      },
      {
        name: 'Jagro H3+ Multi-Speed Rotavator (7 Feet)',
        category: 'Tillage',
        hp: '50 - 55 HP',
        desc: 'Heavy-duty double-pipe frame with dual spring suspension for rock-solid soil pulverization.',
        blades: '54 Blades, Multi-Speed'
      },
      {
        name: 'Precision Laser Land Leveller',
        category: 'Land Prep',
        hp: '50 - 60 HP',
        desc: 'Laser transmitter and receiver grading system saves up to 30% irrigation water and improves crop yield.',
        blades: '7 - 8 Ft Heavy Bucket'
      }
    ],
    '60+': [
      {
        name: 'JSR Heavy Duty Straw Reaper (63")',
        category: 'Residue & Fodder',
        hp: '60+ HP (Double Blower)',
        desc: 'Cuts, threshes, and cleans combine-harvested paddy & wheat straw into top-grade cattle feed in a single pass.',
        blades: '180+ High Tensile Blades'
      },
      {
        name: 'Mobile Paddy Straw Shredder / Mulcher',
        category: 'Residue Management',
        hp: '60+ HP',
        desc: 'High-speed pulverizer converts thick paddy stubble into fine organic mulch to prevent stubble burning.',
        blades: 'Heavy Duty Forged Hammers'
      },
      {
        name: 'Jagler Super Seeder Deluxe (8 Feet)',
        category: 'Seeding',
        hp: '65+ HP',
        desc: 'Wide-span super seeder for massive farm holdings and contract farming with high acre-per-hour output.',
        blades: '66 Boron Steel Blades'
      }
    ]
  };

  if (hpPills.length > 0 && hpResultsContainer) {
    hpPills.forEach(pill => {
      pill.addEventListener('click', () => {
        hpPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const hpRange = pill.getAttribute('data-hp');
        renderHpResults(hpRange);
      });
    });

    function renderHpResults(range) {
      const items = hpData[range] || [];
      hpResultsContainer.innerHTML = items.map(item => `
        <div class="hp-result-card">
          <div>
            <span class="hp-result-tag">${item.category} • ${item.hp}</span>
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #e2e8f0; padding-top:10px;">
            <small style="color:var(--text-muted); font-weight:600;"><i class="fas fa-cogs"></i> ${item.blades}</small>
            <button class="btn btn-primary btn-sm" onclick="openEnquiryModal('${item.name}')">Enquire</button>
          </div>
        </div>
      `).join('');
    }

    // Initial render
    renderHpResults('50-60');
  }

  // Category Filtering in Product Grid
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterVal === 'all' || category === filterVal) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Interactive Dealer Locator Data
  const dealerDatabase = [
    { state: 'Punjab', district: 'Ludhiana', name: 'Arunima Agro Prime Agency', phone: '+91 98765 43210', address: 'GT Road, Near Dehlon Chowk, Ludhiana' },
    { state: 'Punjab', district: 'Sangrur', name: 'Malwa Agro Implements', phone: '+91 98141 12345', address: 'Sunam-Mansa Road, Cheema, Sangrur' },
    { state: 'Punjab', district: 'Bathinda', name: 'Kisan Tractor & Tools Hub', phone: '+91 98234 56789', address: 'Mansa Road, Bathinda' },
    { state: 'Punjab', district: 'Patiala', name: 'Royal Agri Machinery', phone: '+91 97800 11223', address: 'Nabha Road, Patiala' },
    { state: 'Haryana', district: 'Karnal', name: 'Karnal Farm Tech Solutions', phone: '+91 94160 55443', address: 'Sector 3 Ind. Area, Karnal' },
    { state: 'Haryana', district: 'Hisar', name: 'Haryana Green Agro Tools', phone: '+91 94162 99887', address: 'Delhi Road, Hisar' },
    { state: 'Haryana', district: 'Sirsa', name: 'Sirsa Kisan Mechanization', phone: '+91 94161 33221', address: 'Barnala Road, Sirsa' },
    { state: 'Uttar Pradesh', district: 'Meerut', name: 'Chaudhary Agri Tractors', phone: '+91 98370 77665', address: 'Delhi-Dehradun Highway, Meerut' },
    { state: 'Uttar Pradesh', district: 'Bareilly', name: 'Rohilkhand Kisan Store', phone: '+91 98371 44556', address: 'Pilibhit Bypass Road, Bareilly' },
    { state: 'Uttar Pradesh', district: 'Lakhimpur Kheri', name: 'Terai Farm Implements', phone: '+91 94500 88776', address: 'Station Road, Lakhimpur' },
    { state: 'Rajasthan', district: 'Sri Ganganagar', name: 'Ganganagar Agro Mart', phone: '+91 94140 12890', address: 'Suratgarh Road, Sri Ganganagar' },
    { state: 'Rajasthan', district: 'Hanumangarh', name: 'Thar Kisan Equipment', phone: '+91 94142 66778', address: 'Town Junction Road, Hanumangarh' },
    { state: 'Madhya Pradesh', district: 'Bhopal', name: 'Central India Agro Equipments', phone: '+91 98260 33441', address: 'Hoshangabad Road, Bhopal' },
    { state: 'Madhya Pradesh', district: 'Indore', name: 'Malwa Tractor & Implements', phone: '+91 98262 55667', address: 'Sanwer Road, Indore' },
    { state: 'Maharashtra', district: 'Nashik', name: 'Sahyadri Agro Mechanization', phone: '+91 98220 44332', address: 'Mumbai-Agra Highway, Nashik' },
    { state: 'Gujarat', district: 'Rajkot', name: 'Saurashtra Farm Tech', phone: '+91 98250 88990', address: 'Gondal Road, Rajkot' }
  ];

  const stateSelect = document.getElementById('dealerState');
  const districtSelect = document.getElementById('dealerDistrict');
  const dealerList = document.getElementById('dealerList');

  if (stateSelect && dealerList) {
    stateSelect.addEventListener('change', () => {
      const selectedState = stateSelect.value;
      
      // Update District Dropdown
      if (districtSelect) {
        districtSelect.innerHTML = '<option value="">All Districts</option>';
        if (selectedState) {
          const districts = [...new Set(dealerDatabase.filter(d => d.state === selectedState).map(d => d.district))];
          districts.forEach(dist => {
            districtSelect.innerHTML += `<option value="${dist}">${dist}</option>`;
          });
        }
      }

      filterDealers();
    });

    if (districtSelect) {
      districtSelect.addEventListener('change', filterDealers);
    }

    function filterDealers() {
      const selectedState = stateSelect.value;
      const selectedDistrict = districtSelect ? districtSelect.value : '';

      let results = dealerDatabase;
      if (selectedState) {
        results = results.filter(d => d.state === selectedState);
      }
      if (selectedDistrict) {
        results = results.filter(d => d.district === selectedDistrict);
      }

      if (results.length === 0) {
        dealerList.innerHTML = `<p style="padding:15px; color:#cbd5e1; text-align:center;">No authorized dealers found for this selection. Call our helpline at <strong>+91 92811 92456</strong> for direct factory assistance.</p>`;
        return;
      }

      dealerList.innerHTML = results.map(d => `
        <div class="dealer-card">
          <div class="dealer-details">
            <h5>${d.name} (${d.district}, ${d.state})</h5>
            <p><i class="fas fa-map-marker-alt" style="color:var(--accent);"></i> ${d.address}</p>
          </div>
          <div>
            <a href="tel:${d.phone.replace(/\\s+/g, '')}" class="btn btn-primary btn-sm"><i class="fas fa-phone-alt"></i> ${d.phone}</a>
          </div>
        </div>
      `).join('');
    }

    // Default load
    filterDealers();
  }

  // Form Submissions with Toast
  const leadForms = document.querySelectorAll('.lead-form');
  leadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneInput = form.querySelector('input[type="tel"]');
      if (phoneInput && phoneInput.value.trim().length < 10) {
        showToast('Please enter a valid 10-digit mobile number.');
        return;
      }
      showToast('Thank you! Your inquiry has been sent to our sales team.');
      form.reset();
      closeModal('enquiryModal');
    });
  });
});

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Modal logic
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

window.openEnquiryModal = function(productName) {
  const modal = document.getElementById('enquiryModal');
  const productInput = document.getElementById('enquiryProductInput');
  if (productInput && productName) {
    productInput.value = productName;
  }
  if (modal) modal.classList.add('open');
};

// Open WhatsApp direct chat
window.openWhatsApp = function(customText) {
  const phone = '919281192456';
  const text = encodeURIComponent(customText || 'Hello Arunima Agro Enterprises, I am interested in your agricultural machinery. Please share details and pricing.');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
};
