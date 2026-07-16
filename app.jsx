import { ICONS } from './icons.js';
// ================= NUTRITIONAL FOOD DATABASE =================
// Normalized database: stores nutrition info per 100g, or per standard item.
const DEFAULT_FOOD_DATABASE = [
  // Eggs & Dairy
  { name: 'egg', keywords: ['eggs', 'boiled egg', 'scrambled egg'], calories: 143, protein: 12.6, carbs: 0.7, fat: 9.5, fiber: 0, size: 50, unit: 'g', type: 'item' },
  { name: 'egg white', keywords: ['egg whites'], calories: 52, protein: 11, carbs: 0.7, fat: 0.2, fiber: 0, size: 33, unit: 'g', type: 'item' },
  { name: 'milk', keywords: ['whole milk', 'milk glass'], calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0, size: 244, unit: 'ml', type: 'liquid' },
  { name: 'skim milk', keywords: ['fat free milk'], calories: 34, protein: 3.4, carbs: 5, fat: 0.1, fiber: 0, size: 244, unit: 'ml', type: 'liquid' },
  { name: 'greek yogurt', keywords: ['yogurt', 'curd'], calories: 59, protein: 10, carbs: 3.6, fat: 0.4, fiber: 0, size: 150, unit: 'g', type: 'weight' },
  { name: 'cheddar cheese', keywords: ['cheese slice', 'cheese'], calories: 403, protein: 25, carbs: 1.3, fat: 33, fiber: 0, size: 28, unit: 'g', type: 'weight' },
  { name: 'cottage cheese', keywords: ['paneer'], calories: 98, protein: 11, carbs: 3.4, fat: 4.3, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  { name: 'butter', keywords: ['ghee'], calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0, size: 14, unit: 'g', type: 'weight' },
  // Meat & Fish (Raw/Cooked averages)
  { name: 'chicken breast', keywords: ['grilled chicken', 'chicken cooked', 'chicken'], calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  { name: 'salmon', keywords: ['grilled salmon', 'fish salmon'], calories: 206, protein: 22, carbs: 0, fat: 12.3, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  { name: 'tuna canned', keywords: ['tuna', 'canned tuna'], calories: 116, protein: 26, carbs: 0, fat: 1, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  { name: 'beef', keywords: ['beef steak', 'steak', 'ground beef'], calories: 250, protein: 26, carbs: 0, fat: 15, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  { name: 'pork chop', keywords: ['pork', 'cooked pork'], calories: 242, protein: 27, carbs: 0, fat: 14, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  { name: 'shrimp', keywords: ['prawns', 'shrimps'], calories: 99, protein: 24, carbs: 0.2, fat: 0.3, fiber: 0, size: 100, unit: 'g', type: 'weight' },
  // Grains & Carbohydrates
  { name: 'white rice', keywords: ['cooked rice', 'rice cooked', 'rice'], calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, size: 195, unit: 'g', type: 'weight' },
  { name: 'brown rice', keywords: ['cooked brown rice'], calories: 112, protein: 2.3, carbs: 24, fat: 0.8, fiber: 1.8, size: 195, unit: 'g', type: 'weight' },
  { name: 'oats', keywords: ['oatmeal', 'rolled oats'], calories: 389, protein: 16.9, carbs: 66, fat: 6.9, fiber: 10.6, size: 40, unit: 'g', type: 'weight' },
  { name: 'whole wheat bread', keywords: ['wheat bread', 'brown bread', 'bread slice', 'toast'], calories: 247, protein: 13, carbs: 41, fat: 3.4, fiber: 7, size: 28, unit: 'g', type: 'item' },
  { name: 'white bread', keywords: ['sliced bread'], calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7, size: 28, unit: 'g', type: 'item' },
  { name: 'pasta', keywords: ['spaghetti', 'cooked pasta', 'noodles'], calories: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8, size: 100, unit: 'g', type: 'weight' },
  { name: 'potato', keywords: ['boiled potato', 'potatoes'], calories: 87, protein: 1.9, carbs: 20, fat: 0.1, fiber: 1.8, size: 150, unit: 'g', type: 'item' },
  { name: 'sweet potato', keywords: ['boiled sweet potato'], calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3, size: 130, unit: 'g', type: 'item' },
  { name: 'quinoa', keywords: ['cooked quinoa'], calories: 120, protein: 4.4, carbs: 21.3, fat: 1.9, fiber: 2.8, size: 185, unit: 'g', type: 'weight' },
  // Fruits
  { name: 'apple', keywords: ['red apple', 'apples'], calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, size: 182, unit: 'g', type: 'item' },
  { name: 'banana', keywords: ['bananas'], calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, size: 118, unit: 'g', type: 'item' },
  { name: 'strawberry', keywords: ['strawberries', 'berry'], calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2, size: 12, unit: 'g', type: 'item' },
  { name: 'blueberry', keywords: ['blueberries'], calories: 57, protein: 0.7, carbs: 14, fat: 0.3, fiber: 2.4, size: 150, unit: 'g', type: 'weight' },
  { name: 'orange', keywords: ['oranges', 'citrus'], calories: 47, protein: 0.9, carbs: 12, fat: 0.1, fiber: 2.4, size: 131, unit: 'g', type: 'item' },
  { name: 'avocado', keywords: ['avocados'], calories: 160, protein: 2, carbs: 8.5, fat: 14.7, fiber: 6.7, size: 150, unit: 'g', type: 'item' },
  { name: 'watermelon', keywords: ['watermelon slice'], calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, size: 280, unit: 'g', type: 'weight' },
  // Vegetables
  { name: 'broccoli', keywords: ['steamed broccoli'], calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6, size: 150, unit: 'g', type: 'weight' },
  { name: 'spinach', keywords: ['cooked spinach', 'spinach leaves'], calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, size: 100, unit: 'g', type: 'weight' },
  { name: 'cucumber', keywords: ['cucumbers'], calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, size: 300, unit: 'g', type: 'item' },
  { name: 'tomato', keywords: ['tomatoes'], calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, size: 120, unit: 'g', type: 'item' },
  { name: 'carrot', keywords: ['carrots'], calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8, size: 60, unit: 'g', type: 'item' },
  { name: 'salad', keywords: ['mixed salad', 'green salad'], calories: 17, protein: 1.2, carbs: 3.2, fat: 0.2, fiber: 1.3, size: 100, unit: 'g', type: 'weight' },
  // Nuts, Seeds & Oils
  { name: 'almonds', keywords: ['almond'], calories: 579, protein: 21, carbs: 22, fat: 49, fiber: 12.5, size: 28, unit: 'g', type: 'weight' },
  { name: 'peanut butter', keywords: ['peanutbutter', 'peanuts butter'], calories: 588, protein: 25, carbs: 20, fat: 50, fiber: 6, size: 16, unit: 'g', type: 'weight' },
  { name: 'olive oil', keywords: ['oil', 'cooking oil'], calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, size: 14, unit: 'ml', type: 'liquid' },
  { name: 'chia seeds', keywords: ['chia seed'], calories: 486, protein: 16.5, carbs: 42, fat: 31, fiber: 34, size: 15, unit: 'g', type: 'weight' },
  // Supplements & Cheat Meals
  { name: 'whey protein', keywords: ['protein powder', 'whey scoop'], calories: 390, protein: 80, carbs: 6, fat: 3, fiber: 0, size: 30, unit: 'g', type: 'item' },
  { name: 'pizza slice', keywords: ['pizza', 'pepperoni pizza'], calories: 266, protein: 11, carbs: 33, fat: 10, fiber: 2.3, size: 107, unit: 'g', type: 'item' },
  { name: 'burger', keywords: ['cheeseburger', 'hamburger'], calories: 295, protein: 17, carbs: 24, fat: 14, fiber: 1.5, size: 150, unit: 'g', type: 'item' },
  { name: 'french fries', keywords: ['fries', 'potato fries'], calories: 312, protein: 3.4, carbs: 41, fat: 15, fiber: 3.8, size: 117, unit: 'g', type: 'weight' },
  { name: 'cola', keywords: ['coke', 'soda'], calories: 38, protein: 0, carbs: 10, fat: 0, fiber: 0, size: 355, unit: 'ml', type: 'liquid' }
];
// ================= APPLICATION STATE =================
const state = {
  currentDate: getLocalDateString(new Date()),
  activeTab: 'dashboard',
  profile: {
    name: 'John Doe',
    weight: 75,
    height: 175,
    age: 28,
    gender: 'male',
    activity: 'light',
    goal: 'maintain',
    targetCal: 2200,
    targetProtein: 140,
    targetCarbs: 250,
    targetFat: 70,
    targetFiber: 30,
    waterGoal: 2500
  },
  customFoods: [],
  logs: {} // Map: YYYY-MM-DD -> { meals: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] }, water: 0 }
};
// ================= LOCALSTORAGE HANDLER =================
function loadStateFromStorage() {
  try {
    const savedProfile = localStorage.getItem('nq_profile');
    if (savedProfile) {
      state.profile = JSON.parse(savedProfile);
    } else {
      recalculateTargets(); // Set initial base run targets
    }
    
    const savedCustomFoods = localStorage.getItem('nq_food_db');
    if (savedCustomFoods) {
      state.customFoods = JSON.parse(savedCustomFoods);
    }
    
    const savedLogs = localStorage.getItem('nq_daily_logs');
    if (savedLogs) {
      state.logs = JSON.parse(savedLogs);
    }
    
    // Ensure current date exists in state
    initializeDayLog(state.currentDate);
  } catch (e) {
    console.error('Failed to load localstorage', e);
  }
}
function saveStateToStorage() {
  try {
    localStorage.setItem('nq_profile', JSON.stringify(state.profile));
    localStorage.setItem('nq_food_db', JSON.stringify(state.customFoods));
    localStorage.setItem('nq_daily_logs', JSON.stringify(state.logs));
  } catch (e) {
    console.error('Failed to write localstorage', e);
  }
}
function initializeDayLog(dateKey) {
  if (!state.logs[dateKey]) {
    state.logs[dateKey] = {
      meals: {
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snacks: []
      },
      water: 0
    };
  }
}
// ================= DATE UTILS =================
function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function formatDisplayDate(dateKey) {
  const today = getLocalDateString(new Date());
  const yesterday = getLocalDateString(new Date(Date.now() - 86400000));
  
  if (dateKey === today) {
    return 'Today, ' + formatDateStr(dateKey);
  } else if (dateKey === yesterday) {
    return 'Yesterday, ' + formatDateStr(dateKey);
  } else {
    return formatDateStr(dateKey);
  }
}
function formatDateStr(dateKey) {
  const parts = dateKey.split('-');
  const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' });
}
// ================= CALORIE & MACRO CALCULATOR =================
function recalculateTargets() {
  const { weight, height, age, gender, activity, goal } = state.profile;
  
  // 1. Calculate BMR (Mifflin-St Jeor)
  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  
  // 2. Calculate TDEE based on activity multiplier
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extra: 1.9
  };
  
  const tdee = Math.round(bmr * (multipliers[activity] || 1.375));
  
  // 3. Adjust Calories according to target goal
  let targetCal = tdee;
  if (goal === 'lose_mild') {
    targetCal = tdee - 250;
  } else if (goal === 'lose') {
    targetCal = tdee - 500;
  } else if (goal === 'gain') {
    targetCal = tdee + 500;
  }
  
  // Cap floor calories for safety guidelines
  const minCal = gender === 'male' ? 1500 : 1200;
  if (targetCal < minCal) targetCal = minCal;
  
  state.profile.targetCal = targetCal;
  
  // 4. Split macros recommendations:
  // Lose weight: High Protein (40%), Low-Med Carbs (35%), Fat (25%)
  // Maintain / Gain weight: Balanced Protein (30%), High Carbs (45%), Fat (25%)
  let proteinRatio = 0.30;
  let carbRatio = 0.45;
  let fatRatio = 0.25;
  
  if (goal.includes('lose')) {
    proteinRatio = 0.40;
    carbRatio = 0.35;
    fatRatio = 0.25;
  }
  
  // Convert Calorie shares to grams (Protein/Carb = 4kcal/g, Fat = 9kcal/g)
  state.profile.targetProtein = Math.round((targetCal * proteinRatio) / 4);
  state.profile.targetCarbs = Math.round((targetCal * carbRatio) / 4);
  state.profile.targetFat = Math.round((targetCal * fatRatio) / 9);
  state.profile.targetFiber = Math.round(30); // Default daily fiber recommendation
  
  // Water recommendation: 35ml per kg bodyweight
  state.profile.waterGoal = Math.round(weight * 35);
  // Round to nearest 250ml
  state.profile.waterGoal = Math.round(state.profile.waterGoal / 250) * 250;
  
  saveStateToStorage();
}
// ================= DIET DETECTOR NLP-LITE PARSER =================
// Full local heuristic matching algorithm
function parseNLPFoodText(text) {
  if (!text || text.trim() === '') return [];
  
  // Join the custom foods + standard foods into one searchable list
  const fullFoodDB = [...state.customFoods, ...DEFAULT_FOOD_DATABASE];
  const items = text.split(/,|\band\b|\+/i);
  const parsedItems = [];
  
  // Match common food weights & fraction words
  const quantityRegex = /(\d+[\/\.]?\d*)\s*(g|grams|ml|cups?|slices?|glasses?|tbsp|tsp|scoops?|pieces?|medium|large|oz)?/i;
  
  for (let rawItem of items) {
    rawItem = rawItem.trim().toLowerCase();
    if (rawItem === '') continue;
    
    let quantity = 1;
    let unit = 'serving';
    let foodTextSearch = rawItem;
    
    const match = rawItem.match(quantityRegex);
    if (match) {
      const numStr = match[1];
      if (numStr.includes('/')) {
        const parts = numStr.split('/');
        quantity = parseFloat(parts[0]) / parseFloat(parts[1]);
      } else {
        quantity = parseFloat(numStr);
      }
      unit = match[2] ? match[2].toLowerCase() : 'piece';
      
      // Extract food name by removing quantity and unit text
      foodTextSearch = rawItem.replace(match[0], '').trim();
    }
    
    // Clean up connecting words
    foodTextSearch = foodTextSearch.replace(/^(of|a|an|the|fresh|raw|cooked|boiled|grilled|steamed)\s+/i, '').trim();
    if (foodTextSearch === '') continue;
    
    // Find best match in database
    let bestMatch = null;
    let highestScore = 0;
    
    for (const food of fullFoodDB) {
      let score = 0;
      const targetName = food.name.toLowerCase();
      
      if (targetName === foodTextSearch) {
        score = 100;
      } else if (targetName.includes(foodTextSearch) || foodTextSearch.includes(targetName)) {
        // Calculate similarity based on shared string length proportion
        score = Math.min(targetName.length, foodTextSearch.length) / Math.max(targetName.length, foodTextSearch.length) * 80;
      } else {
        // Check keywords synonyms
        for (const kw of (food.keywords || [])) {
          if (kw === foodTextSearch) {
            score = 90;
            break;
          } else if (kw.includes(foodTextSearch) || foodTextSearch.includes(kw)) {
            score = Math.min(kw.length, foodTextSearch.length) / Math.max(kw.length, foodTextSearch.length) * 70;
            break;
          }
        }
      }
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = food;
      }
    }
    
    // If we have a reasonable match (>20% score)
    if (bestMatch && highestScore > 20) {
      // Calculate scaling factor based on the unit and quantity
      let scale = 1;
      let calculatedUnit = bestMatch.unit;
      let displayQuantity = quantity;
      
      if (unit.startsWith('g')) { // grams specified
        scale = quantity / 100; // Database is normalized per 100g/ml
        calculatedUnit = 'g';
      } else if (unit.startsWith('ml')) {
        scale = quantity / 100;
        calculatedUnit = 'ml';
      } else if (unit.startsWith('cup')) {
        scale = (quantity * 200) / 100; // Estimate cup size as 200g
        calculatedUnit = 'cup';
      } else if (unit.startsWith('slice')) {
        // If DB is per slice (item), use quantity, otherwise map to slice scale
        scale = bestMatch.type === 'item' ? quantity : (quantity * bestMatch.size) / 100;
        calculatedUnit = 'slice';
      } else {
        // Assume default database serving size
        scale = bestMatch.type === 'item' ? quantity : (quantity * bestMatch.size) / 100;
      }
      
      // Calculate calories & macro values
      const calories = Math.round(bestMatch.calories * scale);
      const protein = parseFloat((bestMatch.protein * scale).toFixed(1));
      const carbs = parseFloat((bestMatch.carbs * scale).toFixed(1));
      const fat = parseFloat((bestMatch.fat * scale).toFixed(1));
      const fiber = parseFloat(((bestMatch.fiber || 0) * scale).toFixed(1));
      
      parsedItems.push({
        id: generateId(),
        name: capitalizeFirst(bestMatch.name),
        quantity: displayQuantity,
        unit: calculatedUnit,
        calories,
        protein,
        carbs,
        fat,
        fiber
      });
    } else {
      // Fallback placeholder estimation if unknown food
      parsedItems.push({
        id: generateId(),
        name: capitalizeFirst(foodTextSearch),
        quantity: quantity,
        unit: unit,
        calories: Math.round(quantity * 100), // Default guestimate
        protein: parseFloat((quantity * 4).toFixed(1)),
        carbs: parseFloat((quantity * 12).toFixed(1)),
        fat: parseFloat((quantity * 3.5).toFixed(1)),
        fiber: 0,
        isGuestimate: true
      });
    }
  }
  
  return parsedItems;
}
// Generate unique ID
function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// ================= UI RENDER LOOP =================
function renderAll() {
  renderDateDisplay();
  renderDashboard();
  renderDiaryLog();
  renderGoalsForm();
  renderAnalytics();
}
function renderDateDisplay() {
  const displayVal = formatDisplayDate(state.currentDate);
  document.getElementById('current-date-display').textContent = displayVal;
}
function renderDashboard() {
  const dayLog = state.logs[state.currentDate];
  
  // Calculate consumed totals
  let consumedCal = 0;
  let consumedProtein = 0;
  let consumedCarbs = 0;
  let consumedFat = 0;
  let consumedFiber = 0;
  
  const allMealItems = [];
  for (const category in dayLog.meals) {
    const list = dayLog.meals[category];
    for (const item of list) {
      consumedCal += item.calories;
      consumedProtein += item.protein;
      consumedCarbs += item.carbs;
      consumedFat += item.fat;
      consumedFiber += item.fiber;
      
      allMealItems.push({ ...item, category });
    }
  }
  
  // Render calorie targets
  const targetCal = state.profile.targetCal;
  const calRemaining = Math.max(0, targetCal - consumedCal);
  
  document.getElementById('dashboard-calories-goal').textContent = targetCal.toLocaleString();
  document.getElementById('dashboard-calories-consumed').textContent = consumedCal.toLocaleString();
  document.getElementById('dashboard-calories-remaining').textContent = calRemaining.toLocaleString();
  
  // Fill Ring Gauge
  const ring = document.getElementById('calorie-progress-ring');
  const dashTotal = 565.48; // Circumference of radius 90 (2 * pi * 90)
  const ratio = Math.min(1, consumedCal / targetCal);
  const offset = dashTotal - (ratio * dashTotal);
  ring.style.strokeDashoffset = offset;
  
  // Update targets UI display
  document.getElementById('dashboard-protein-val').textContent = Math.round(consumedProtein) + 'g';
  document.getElementById('dashboard-protein-target').textContent = `of ${state.profile.targetProtein}g`;
  
  document.getElementById('dashboard-carbs-val').textContent = Math.round(consumedCarbs) + 'g';
  document.getElementById('dashboard-carbs-target').textContent = `of ${state.profile.targetCarbs}g`;
  
  document.getElementById('dashboard-fat-val').textContent = Math.round(consumedFat) + 'g';
  document.getElementById('dashboard-fat-target').textContent = `of ${state.profile.targetFat}g`;
  
  document.getElementById('dashboard-fiber-val').textContent = Math.round(consumedFiber) + 'g';
  document.getElementById('dashboard-fiber-target').textContent = `of ${state.profile.targetFiber}g`;
  
  // Render water tracker widget
  const currentWater = dayLog.water;
  const targetWater = state.profile.waterGoal;
  document.getElementById('water-logged-display').textContent = `${currentWater} ml`;
  document.getElementById('water-goal-display').textContent = targetWater;
  
  const waterPercent = Math.min(100, (currentWater / targetWater) * 100);
  const waveElement = document.getElementById('water-wave-element');
  waveElement.style.height = `${waterPercent}%`;
  
  // Log item list overview on Dashboard
  const emptyState = document.getElementById('dashboard-quicklog-empty');
  const logListContainer = document.getElementById('dashboard-quicklog-list');
  
  if (allMealItems.length === 0) {
    emptyState.style.display = 'block';
    logListContainer.style.display = 'none';
  } else {
    emptyState.style.display = 'none';
    logListContainer.style.display = 'block';
    
    logListContainer.innerHTML = allMealItems.map(item => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border-bottom: 1px solid var(--border-color); font-size: 0.9rem;">
        <div>
          <span style="font-weight: 600; color: var(--text-primary);">${item.name}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">${item.quantity} ${item.unit} (${item.category})</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-size: 0.8rem; color: var(--text-secondary);">P: ${item.protein}g C: ${item.carbs}g F: ${item.fat}g</span>
          <span style="font-weight: bold; color: var(--color-calories);">${item.calories} kcal</span>
        </div>
      </div>
    `).join('');
  }
  
  // Render personal profile display details
  document.getElementById('profile-name-display').textContent = state.profile.name;
  
  const goalLabels = {
    lose_mild: 'Mild Weight Loss',
    lose: 'Weight Loss',
    maintain: 'Maintain Weight',
    gain: 'Weight Gain'
  };
  document.getElementById('profile-goal-display').textContent = goalLabels[state.profile.goal] || 'Balanced Diet';
  
  const nameParts = state.profile.name.split(' ');
  const initials = nameParts.map(n => n.charAt(0)).join('').substring(0, 2).toUpperCase();
  document.getElementById('profile-initials').textContent = initials;
  
  renderTipsAndSuggestions(consumedCal, targetCal, consumedProtein, state.profile.targetProtein, consumedFiber, state.profile.targetFiber, currentWater, targetWater);
}
function renderTipsAndSuggestions(cals, targetCals, prot, targetProt, fib, targetFib, water, targetWater) {
  const tipsContainer = document.getElementById('dashboard-tips-container');
  const insights = [];
  
  // 1. Water
  if (water === 0) {
    insights.push({
      title: 'Hydration Needed',
      desc: 'You haven\'t logged any water today yet. Sip a glass right now!',
      level: 'warning'
    });
  } else if (water < targetWater * 0.5) {
    insights.push({
      title: 'Sip More Water',
      desc: `You've completed ${Math.round((water/targetWater)*100)}% of your daily water intake. Try to hit at least half of your target.`,
      level: 'info'
    });
  } else if (water >= targetWater) {
    insights.push({
      title: 'Hydrated Champion!',
      desc: 'Awesome job! You reached your daily hydration target.',
      level: 'success'
    });
  }
  
  // 2. Calories
  if (cals > targetCals + 100) {
    insights.push({
      title: 'Calorie Target Exceeded',
      desc: `You are currently ${Math.round(cals - targetCals)} kcal over your goal. Avoid heavy meals for the rest of today.`,
      level: 'warning'
    });
  } else if (cals > targetCals * 0.85 && cals <= targetCals) {
    insights.push({
      title: 'Almost at Target',
      desc: 'Excellent control. You are close to hitting your calorie ceiling perfectly.',
      level: 'success'
    });
  }
  
  // 3. Protein
  if (prot < targetProt * 0.5 && cals > 0) {
    insights.push({
      title: 'Protein Boost Needed',
      desc: 'Protein is vital for muscle repair. Try snacking on cottage cheese, boiled eggs, Greek yogurt, or a whey protein shake.',
      level: 'info'
    });
  } else if (prot >= targetProt) {
    insights.push({
      title: 'Protein Target Achieved!',
      desc: 'Excellent work meeting your structural macronutrient target today.',
      level: 'success'
    });
  }
  
  // 4. Fiber
  if (fib < targetFib * 0.5 && cals > 0) {
    insights.push({
      title: 'Increase Dietary Fiber',
      desc: 'Add steel-cut oats, apples, almonds, broccoli, or chia seeds to improve digestability and lower glycemic indices.',
      level: 'info'
    });
  }
  
  // Render fallback if list empty
  if (insights.length === 0) {
    insights.push({
      title: 'Ready to Log',
      desc: 'Log your morning coffee, breakfast toast, or glass of water to get custom nutrition diagnostics.',
      level: 'info'
    });
  }
  
  const levelColors = {
    warning: 'var(--color-fat)',
    info: 'var(--color-carbs)',
    success: 'var(--color-protein)'
  };
  
  tipsContainer.innerHTML = insights.map(tip => `
    <div class="tip-card" style="border-left-color: ${levelColors[tip.level] || '#6366f1'};">
      <div class="tip-card-title">${tip.title}</div>
      <div style="color: var(--text-secondary); line-height: 1.4;">${tip.desc}</div>
    </div>
  `).join('');
}
function renderDiaryLog() {
  const dayLog = state.logs[state.currentDate];
  
  let consumedCal = 0;
  let consumedProtein = 0;
  let consumedCarbs = 0;
  let consumedFat = 0;
  let consumedFiber = 0;
  
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  
  for (const cat of categories) {
    const listElement = document.getElementById(`${cat.toLowerCase()}-items-list`);
    const calSummary = document.getElementById(`${cat.toLowerCase()}-calories-summary`);
    const items = dayLog.meals[cat] || [];
    
    let catCalories = 0;
    
    if (items.length === 0) {
      listElement.innerHTML = `<li style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">No items logged</li>`;
    } else {
      listElement.innerHTML = items.map((item, idx) => {
        catCalories += item.calories;
        consumedCal += item.calories;
        consumedProtein += item.protein;
        consumedCarbs += item.carbs;
        consumedFat += item.fat;
        consumedFiber += item.fiber;
        
        return `
          <li class="meal-item">
            <div>
              <span class="meal-item-name">${item.name}</span>
              <span class="meal-item-qty">${item.quantity}${item.unit}</span>
            </div>
            <div class="meal-item-right">
              <span class="meal-item-macros">P: ${Math.round(item.protein)}g C: ${Math.round(item.carbs)}g F: ${Math.round(item.fat)}g</span>
              <span style="font-weight: 600; min-width: 60px; text-align: right;">${item.calories} kcal</span>
              <button class="delete-item-btn" data-category="${cat}" data-index="${idx}" aria-label="Delete item">
                ${ICONS.trash}
              </button>
            </div>
          </li>
        `;
      }).join('');
    }
    
    calSummary.textContent = `${catCalories} kcal`;
  }
  
  // Set summary progress numbers for the Log view sidebar panel
  const targetCal = state.profile.targetCal;
  document.getElementById('log-cal-summary').textContent = `${Math.round(consumedCal)} / ${targetCal} kcal`;
  const calPercent = Math.min(100, (consumedCal / targetCal) * 100);
  document.getElementById('log-cal-bar').style.width = `${calPercent}%`;
  
  document.getElementById('log-protein-summary').textContent = `${Math.round(consumedProtein)} / ${state.profile.targetProtein}g`;
  const protPercent = Math.min(100, (consumedProtein / state.profile.targetProtein) * 100);
  document.getElementById('log-protein-bar').style.width = `${protPercent}%`;
  
  document.getElementById('log-carbs-summary').textContent = `${Math.round(consumedCarbs)} / ${state.profile.targetCarbs}g`;
  const carbsPercent = Math.min(100, (consumedCarbs / state.profile.targetCarbs) * 100);
  document.getElementById('log-carbs-bar').style.width = `${carbsPercent}%`;
  
  document.getElementById('log-fat-summary').textContent = `${Math.round(consumedFat)} / ${state.profile.targetFat}g`;
  const fatPercent = Math.min(100, (consumedFat / state.profile.targetFat) * 100);
  document.getElementById('log-fat-bar').style.width = `${fatPercent}%`;
  
  // Add listeners to new delete buttons
  document.querySelectorAll('.delete-item-btn').forEach(btn => {
    btn.onclick = (e) => {
      const category = btn.getAttribute('data-category');
      const idx = parseInt(btn.getAttribute('data-index'));
      deleteLogItem(category, idx);
    };
  });
}
function deleteLogItem(category, index) {
  const dayLog = state.logs[state.currentDate];
  if (dayLog && dayLog.meals[category]) {
    const removedItem = dayLog.meals[category].splice(index, 1)[0];
    saveStateToStorage();
    renderAll();
    showToast(`Removed "${removedItem.name}"`);
  }
}
function renderGoalsForm() {
  document.getElementById('goal-weight').value = state.profile.weight;
  document.getElementById('goal-height').value = state.profile.height;
  document.getElementById('goal-age').value = state.profile.age;
  document.getElementById('goal-gender').value = state.profile.gender;
  document.getElementById('goal-activity').value = state.profile.activity;
  document.getElementById('goal-target').value = state.profile.goal;
  
  // Render goal targets side card
  const container = document.getElementById('goals-summary-container');
  
  // Calculate macronutrient caloric contribution shares
  const pCals = state.profile.targetProtein * 4;
  const cCals = state.profile.targetCarbs * 4;
  const fCals = state.profile.targetFat * 9;
  const totalCalculated = pCals + cCals + fCals;
  
  const pPercent = Math.round((pCals / totalCalculated) * 100);
  const cPercent = Math.round((cCals / totalCalculated) * 100);
  const fPercent = 100 - pPercent - cPercent;
  
  container.innerHTML = `
    <div style="background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Calculated Daily Goal</div>
      <div style="font-size: 2.2rem; font-weight: 700; color: var(--color-calories);">${state.profile.targetCal} <span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary);">kcal / day</span></div>
    </div>
    
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
        <span style="font-weight: 600; color: var(--color-protein);">Protein Target</span>
        <span>${state.profile.targetProtein}g (${pPercent}%)</span>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">Supports lean mass maintenance and muscle synthesis. Highly thermic food source.</p>
    </div>
    
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
        <span style="font-weight: 600; color: var(--color-carbs);">Carbs Target</span>
        <span>${state.profile.targetCarbs}g (${cPercent}%)</span>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">Primary cellular fuel source for muscle glycogen replenishment and cognitive function.</p>
    </div>
    
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
        <span style="font-weight: 600; color: var(--color-fat);">Fat Target</span>
        <span>${state.profile.targetFat}g (${fPercent}%)</span>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">Crucial macronutrient for lipid-soluble hormone regulation, neural sheath integrity, and organ support.</p>
    </div>
    <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.25rem;">
        <span style="font-weight: 600; color: var(--color-water);">Hydration Target</span>
        <span>${state.profile.waterGoal} ml</span>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary);">Calculated for optimal metabolism and fluid clearance.</p>
    </div>
  `;
}
// ================= ANALYTICS SVG DRAWINGS =================
function renderAnalytics() {
  const caloriesChartBox = document.getElementById('analytics-calories-chart-box');
  const waterChartBox = document.getElementById('analytics-water-chart-box');
  const macroSplitBox = document.getElementById('analytics-macro-split-box');
  
  // 1. Prepare 7 days of historical date keys
  const dateKeys = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dateKeys.push(getLocalDateString(d));
  }
  
  // Fetch values
  const calorieValues = [];
  const waterValues = [];
  let aggregateProtein = 0;
  let aggregateCarbs = 0;
  let aggregateFat = 0;
  
  for (const key of dateKeys) {
    const dayData = state.logs[key] || { meals: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] }, water: 0 };
    
    let dayCals = 0;
    for (const cat in dayData.meals) {
      for (const item of dayData.meals[cat]) {
        dayCals += item.calories;
        
        // Sum macros for splitting ratio calculation
        aggregateProtein += item.protein;
        aggregateCarbs += item.carbs;
        aggregateFat += item.fat;
      }
    }
    calorieValues.push(dayCals);
    waterValues.push(dayData.water);
  }
  
  // DRAW CALORIES CHART (SVG)
  const maxCal = Math.max(2500, ...calorieValues, state.profile.targetCal);
  const targetLineY = 200 - (state.profile.targetCal / maxCal) * 150;
  
  let calBarsMarkup = '';
  let calLabelsMarkup = '';
  
  calorieValues.forEach((val, idx) => {
    const x = 50 + idx * 75;
    const height = (val / maxCal) * 150;
    const y = 200 - height;
    
    // Convert key date to label
    const parts = dateKeys[idx].split('-');
    const label = `${parts[1]}/${parts[2]}`;
    
    calBarsMarkup += `
      <g>
        <rect class="chart-bar-rect" x="${x}" y="${y}" width="36" height="${height}" fill="url(#caloriesGrad)"/>
        <!-- Value overlay text on hover -->
        <text x="${x + 18}" y="${y - 8}" font-size="10" font-weight="600" text-anchor="middle" fill="#fff">${val > 0 ? val : ''}</text>
      </g>
    `;
    
    calLabelsMarkup += `
      <text class="chart-axis-label" x="${x + 18}" y="222" text-anchor="middle">${label}</text>
    `;
  });
  
  caloriesChartBox.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 600 240" preserveAspectRatio="none">
      <defs>
        <linearGradient id="caloriesGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      
      <!-- Axis helper grids -->
      <line x1="30" y1="200" x2="570" y2="200" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <line x1="30" y1="125" x2="570" y2="125" stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" stroke-width="1"/>
      <line x1="30" y1="50" x2="570" y2="50" stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" stroke-width="1"/>
      
      <!-- Calorie limit reference target line -->
      <line x1="30" y1="${targetLineY}" x2="570" y2="${targetLineY}" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="5 3"/>
      <text x="560" y="${targetLineY - 6}" font-size="9" fill="#ec4899" font-weight="600" text-anchor="end">Target: ${state.profile.targetCal} kcal</text>
      
      <!-- Draw bars -->
      ${calBarsMarkup}
      
      <!-- X Labels -->
      ${calLabelsMarkup}
    </svg>
  `;
  
  // DRAW WATER CHART (SVG)
  const maxWaterVal = Math.max(3000, ...waterValues, state.profile.waterGoal);
  const targetWaterY = 140 - (state.profile.waterGoal / maxWaterVal) * 100;
  
  let waterBarsMarkup = '';
  let waterLabelsMarkup = '';
  
  waterValues.forEach((val, idx) => {
    const x = 40 + idx * 45;
    const height = (val / maxWaterVal) * 100;
    const y = 140 - height;
    const parts = dateKeys[idx].split('-');
    const label = `${parts[2]}`;
    
    waterBarsMarkup += `
      <rect class="chart-bar-rect" x="${x}" y="${y}" width="20" height="${height}" fill="#3b82f6"/>
    `;
    waterLabelsMarkup += `
      <text class="chart-axis-label" x="${x + 10}" y="158" text-anchor="middle">${label}</text>
    `;
  });
  
  waterChartBox.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 350 170" preserveAspectRatio="none">
      <line x1="20" y1="140" x2="330" y2="140" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <line x1="20" y1="${targetWaterY}" x2="330" y2="${targetWaterY}" stroke="#3b82f6" stroke-opacity="0.5" stroke-width="1" stroke-dasharray="3 3"/>
      
      ${waterBarsMarkup}
      ${waterLabelsMarkup}
    </svg>
  `;
  
  // DRAW MACRO SPLIT
  const totalWeight = aggregateProtein + aggregateCarbs + aggregateFat;
  
  if (totalWeight === 0) {
    macroSplitBox.innerHTML = `
      <div style="text-align: center; width: 100%; color: var(--text-secondary); font-size: 0.85rem;">
        No food entries recorded in the last 7 days. Add meals to see your breakdown split.
      </div>
    `;
  } else {
    const protCals = aggregateProtein * 4;
    const carbCals = aggregateCarbs * 4;
    const fatCals = aggregateFat * 9;
    const totalCalSum = protCals + carbCals + fatCals;
    
    const pPerc = Math.round((protCals / totalCalSum) * 100);
    const cPerc = Math.round((carbCals / totalCalSum) * 100);
    const fPerc = 100 - pPerc - cPerc;
    
    macroSplitBox.innerHTML = `
      <!-- Simple CSS flex segment split bar -->
      <div style="width: 100%; padding: 0.5rem 0;">
        <div style="display: flex; height: 28px; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 1.5rem;">
          <div style="width: ${pPerc}%; background: var(--color-protein); transition: width 0.3s;" title="Protein"></div>
          <div style="width: ${cPerc}%; background: var(--color-carbs); transition: width 0.3s;" title="Carbs"></div>
          <div style="width: ${fPerc}%; background: var(--color-fat); transition: width 0.3s;" title="Fat"></div>
        </div>
        
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 2px; background: var(--color-protein);"></div>
            <span>Protein: <b>${pPerc}%</b></span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 2px; background: var(--color-carbs);"></div>
            <span>Carbs: <b>${cPerc}%</b></span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 2px; background: var(--color-fat);"></div>
            <span>Fats: <b>${fPerc}%</b></span>
          </div>
        </div>
      </div>
    `;
  }
}
// ================= TOAST NOTIFICATION HANDLER =================
function showToast(message, isError = false, type = 'normal') {
  const container = document.getElementById('toast-container-div');
  const toast = document.createElement('div');
  
  toast.className = `toast ${isError ? 'toast-error' : ''} ${type === 'water' ? 'toast-water' : ''}`;
  toast.textContent = message;
  
  container.appendChild(toast);
  
  // Auto-dismiss after 3.2s
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s reverse cubic-bezier(0.16, 1, 0.3, 1) forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}
// ================= EVENT LISTENER ATTACHMENT =================
document.addEventListener('DOMContentLoaded', () => {
  // Load local database & logs
  loadStateFromStorage();
  
  // Inject navigation SVG Icons
  document.getElementById('icon-dashboard').innerHTML = ICONS.dashboard;
  document.getElementById('icon-log').innerHTML = ICONS.log;
  document.getElementById('icon-detector').innerHTML = ICONS.detector;
  document.getElementById('icon-goals').innerHTML = ICONS.goals;
  document.getElementById('icon-analytics').innerHTML = ICONS.analytics;
  
  document.getElementById('title-icon-calories').innerHTML = ICONS.fire + ' ';
  document.getElementById('title-icon-quicklog').innerHTML = ICONS.bolt + ' ';
  document.getElementById('title-icon-water').innerHTML = ICONS.droplet + ' ';
  document.getElementById('title-icon-tips').innerHTML = ICONS.info + ' ';
  document.getElementById('title-icon-chart').innerHTML = ICONS.analytics + ' ';
  
  document.getElementById('prev-date-btn').innerHTML = ICONS.chevronLeft;
  document.getElementById('next-date-btn').innerHTML = ICONS.chevronRight;
  
  document.getElementById('plus-icon-breakfast').innerHTML = ICONS.plus;
  document.getElementById('plus-icon-lunch').innerHTML = ICONS.plus;
  document.getElementById('plus-icon-dinner').innerHTML = ICONS.plus;
  document.getElementById('plus-icon-snacks').innerHTML = ICONS.plus;
  
  // Render View Components
  renderAll();
  
  // Tab Navigation Click Handlers
  const navButtons = document.querySelectorAll('.nav-links .nav-item');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // Update sidebar highlight
      navButtons.forEach(n => n.classList.remove('active'));
      btn.classList.add('active');
      
      // Switch view panel
      document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`view-${tabId}`).classList.add('active');
      
      // Update header titles
      const tabTitles = {
        dashboard: 'Dashboard',
        log: 'Daily Journal',
        detector: 'Smart Food Detector',
        goals: 'Goal Planner & Calculators',
        analytics: 'Analytics & Trends'
      };
      const tabSubtitles = {
        dashboard: 'Your daily health summary at a glance.',
        log: 'Track every ingredient and food log for today.',
        detector: 'Detect and estimate caloric data using plain text description or database search.',
        goals: 'Adjust calculations and target nutritional requirements.',
        analytics: 'Track macro metrics and weekly progress.'
      };
      
      document.getElementById('view-title').textContent = tabTitles[tabId];
      document.getElementById('view-subtitle').textContent = tabSubtitles[tabId];
      
      state.activeTab = tabId;
      
      // Trigger analytics repaint to get correct width calculations
      if (tabId === 'analytics') {
        renderAnalytics();
      }
    });
  });
  
  // Date Navigation buttons
  document.getElementById('prev-date-btn').onclick = () => {
    const parts = state.currentDate.split('-');
    const curDateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    curDateObj.setDate(curDateObj.getDate() - 1);
    
    state.currentDate = getLocalDateString(curDateObj);
    initializeDayLog(state.currentDate);
    saveStateToStorage();
    renderAll();
  };
  
  document.getElementById('next-date-btn').onclick = () => {
    const parts = state.currentDate.split('-');
    const curDateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    curDateObj.setDate(curDateObj.getDate() + 1);
    
    state.currentDate = getLocalDateString(curDateObj);
    initializeDayLog(state.currentDate);
    saveStateToStorage();
    renderAll();
  };
  
  // Profile settings shortcut click (redirects to goal tab)
  document.getElementById('profile-summary-card').onclick = () => {
    const goalNavTab = document.querySelector('[data-tab="goals"]');
    if (goalNavTab) goalNavTab.click();
  };
  
  // Water Tracker interactions
  document.getElementById('add-water-250').onclick = () => {
    state.logs[state.currentDate].water += 250;
    saveStateToStorage();
    renderAll();
    showToast('Logged +250 ml of water', false, 'water');
  };
  
  document.getElementById('add-water-500').onclick = () => {
    state.logs[state.currentDate].water += 500;
    saveStateToStorage();
    renderAll();
    showToast('Logged +500 ml of water', false, 'water');
  };
  
  document.getElementById('reset-water-btn').onclick = () => {
    state.logs[state.currentDate].water = 0;
    saveStateToStorage();
    renderAll();
    showToast('Reset water tracker', true);
  };
  
  // --- Diary Logging Modal Controls ---
  const logModal = document.getElementById('add-food-modal');
  const closeLogModal = document.getElementById('close-log-modal-btn');
  const manualLogForm = document.getElementById('manual-log-form');
  
  // Open log item modal for Breakfast/Lunch/Dinner/Snack
  const categoriesList = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  categoriesList.forEach(cat => {
    document.getElementById(`add-item-btn-${cat.toLowerCase()}`).onclick = () => {
      document.getElementById('manual-log-category').value = cat;
      document.getElementById('modal-title-context').textContent = `Log ${cat} Item`;
      
      // Reset forms
      manualLogForm.reset();
      
      // Default placeholder values for manual adding
      document.getElementById('manual-log-servings').value = 1;
      document.getElementById('manual-log-unit').value = 'serving';
      document.getElementById('manual-log-calories').value = 150;
      document.getElementById('manual-log-protein').value = 10;
      document.getElementById('manual-log-carbs').value = 15;
      document.getElementById('manual-log-fat').value = 5;
      document.getElementById('manual-log-fiber').value = 0;
      
      logModal.classList.add('active');
    };
  });
  
  closeLogModal.onclick = () => {
    logModal.classList.remove('active');
  };
  
  // Submit manual logged food item
  manualLogForm.onsubmit = (e) => {
    e.preventDefault();
    const category = document.getElementById('manual-log-category').value;
    const name = document.getElementById('manual-log-name').value.trim();
    const servings = parseFloat(document.getElementById('manual-log-servings').value);
    const unit = document.getElementById('manual-log-unit').value.trim();
    const calories = parseInt(document.getElementById('manual-log-calories').value);
    const protein = parseFloat(document.getElementById('manual-log-protein').value);
    const carbs = parseFloat(document.getElementById('manual-log-carbs').value);
    const fat = parseFloat(document.getElementById('manual-log-fat').value);
    const fiber = parseFloat(document.getElementById('manual-log-fiber').value) || 0;
    
    const loggedItem = {
      id: generateId(),
      name: capitalizeFirst(name),
      quantity: servings,
      unit,
      calories: Math.round(calories * servings),
      protein: parseFloat((protein * servings).toFixed(1)),
      carbs: parseFloat((carbs * servings).toFixed(1)),
      fat: parseFloat((fat * servings).toFixed(1)),
      fiber: parseFloat((fiber * servings).toFixed(1))
    };
    
    state.logs[state.currentDate].meals[category].push(loggedItem);
    saveStateToStorage();
    logModal.classList.remove('active');
    renderAll();
    showToast(`Logged "${loggedItem.name}" to ${category}`);
  };
  
  // --- Smart NLP Food Detector ---
  const nlpInput = document.getElementById('nlp-food-input');
  const nlpParseBtn = document.getElementById('nlp-parse-btn');
  const nlpClearBtn = document.getElementById('nlp-clear-btn');
  
  let currentParsedResultItems = [];
  
  nlpParseBtn.onclick = () => {
    const text = nlpInput.value.trim();
    if (text === '') {
      showToast('Please type a description first', true);
      return;
    }
    
    currentParsedResultItems = parseNLPFoodText(text);
    
    const resultsBox = document.getElementById('detector-results-content');
    const emptyState = document.getElementById('detector-empty-state');
    const rowsContainer = document.getElementById('detector-parsed-rows');
    const totalCalSpan = document.getElementById('detector-total-calories');
    
    if (currentParsedResultItems.length === 0) {
      emptyState.style.display = 'block';
      resultsBox.style.display = 'none';
      return;
    }
    
    emptyState.style.display = 'none';
    resultsBox.style.display = 'block';
    
    let totalCals = 0;
    rowsContainer.innerHTML = currentParsedResultItems.map(item => {
      totalCals += item.calories;
      return `
        <div class="parsed-food-row">
          <div>
            <div class="parsed-food-name">
              ${item.name} 
              ${item.isGuestimate ? '<span style="font-size: 0.65rem; background: rgba(245,158,11,0.2); color: var(--color-calories); padding: 1px 4px; border-radius: 3px;">Estimate</span>' : ''}
            </div>
            <div class="parsed-food-macros">P: ${item.protein}g C: ${item.carbs}g F: ${item.fat}g Fib: ${item.fiber}g</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.75rem; color: var(--text-muted);">${item.quantity} ${item.unit}</div>
            <div style="font-weight: 600; color: var(--color-calories);">${item.calories} kcal</div>
          </div>
        </div>
      `;
    }).join('');
    
    totalCalSpan.textContent = `${totalCals} kcal`;
  };
  
  nlpClearBtn.onclick = () => {
    nlpInput.value = '';
    document.getElementById('detector-empty-state').style.display = 'block';
    document.getElementById('detector-results-content').style.display = 'none';
    currentParsedResultItems = [];
  };
  
  // Listeners for nlp example tags
  document.querySelectorAll('.nlp-example-tag').forEach(tag => {
    tag.onclick = () => {
      nlpInput.value = tag.getAttribute('data-text');
      nlpParseBtn.click();
    };
  });
  
  // Log detected items to Diary
  document.getElementById('detector-log-btn').onclick = () => {
    if (currentParsedResultItems.length === 0) return;
    
    const mealCategory = document.getElementById('detector-meal-select').value;
    
    for (const item of currentParsedResultItems) {
      state.logs[state.currentDate].meals[mealCategory].push(item);
    }
    
    saveStateToStorage();
    nlpClearBtn.click();
    renderAll();
    showToast(`Logged food items to ${mealCategory}`);
    
    // Jump to diary tab
    document.querySelector('[data-tab="log"]').click();
  };
  
  // --- Food Database Autocomplete Search ---
  const searchInput = document.getElementById('food-search-input');
  const searchResultsDiv = document.getElementById('food-search-results');
  
  searchInput.oninput = () => {
    const text = searchInput.value.trim().toLowerCase();
    if (text === '') {
      searchResultsDiv.classList.remove('active');
      return;
    }
    
    const fullFoodDB = [...state.customFoods, ...DEFAULT_FOOD_DATABASE];
    
    // Filter database
    const matches = fullFoodDB.filter(food => {
      if (food.name.toLowerCase().includes(text)) return true;
      return (food.keywords || []).some(k => k.toLowerCase().includes(text));
    }).slice(0, 8); // cap size at 8
    
    if (matches.length === 0) {
      searchResultsDiv.innerHTML = `<div style="padding: 0.75rem 1rem; color: var(--text-muted); font-size: 0.85rem;">No foods match your search. Try adding a custom food definition.</div>`;
      searchResultsDiv.classList.add('active');
      return;
    }
    
    searchResultsDiv.innerHTML = matches.map(food => `
      <div class="search-item" data-food-name="${food.name}">
        <div>
          <div class="search-item-title">${capitalizeFirst(food.name)}</div>
          <div class="search-item-sub">Serving: ${food.size}${food.unit} • P: ${food.protein}g C: ${food.carbs}g F: ${food.fat}g</div>
        </div>
        <div class="search-item-cals">${food.calories} kcal</div>
      </div>
    `).join('');
    
    searchResultsDiv.classList.add('active');
    
    // Add click handler to autocomplete matches
    document.querySelectorAll('.search-item').forEach(el => {
      el.onclick = () => {
        const foodName = el.getAttribute('data-food-name');
        const found = fullFoodDB.find(f => f.name === foodName);
        if (found) {
          // Open logging modal pre-filled with this food
          document.getElementById('manual-log-category').value = 'Breakfast';
          document.getElementById('modal-title-context').textContent = `Log ${capitalizeFirst(found.name)}`;
          
          manualLogForm.reset();
          
          document.getElementById('manual-log-name').value = capitalizeFirst(found.name);
          document.getElementById('manual-log-servings').value = 1;
          document.getElementById('manual-log-unit').value = found.unit;
          document.getElementById('manual-log-calories').value = found.calories;
          document.getElementById('manual-log-protein').value = found.protein;
          document.getElementById('manual-log-carbs').value = found.carbs;
          document.getElementById('manual-log-fat').value = found.fat;
          document.getElementById('manual-log-fiber').value = found.fiber || 0;
          
          logModal.classList.add('active');
          searchResultsDiv.classList.remove('active');
          searchInput.value = '';
        }
      };
    });
  };
  
  // Close search auto-suggest lists on click-out
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResultsDiv.contains(e.target)) {
      searchResultsDiv.classList.remove('active');
    }
  });
  
  // --- Create Custom Food Modal Controls ---
  const customModal = document.getElementById('custom-food-modal');
  const closeCustomModal = document.getElementById('close-custom-modal-btn');
  const customFoodForm = document.getElementById('custom-food-definition-form');
  
  document.getElementById('open-custom-food-modal').onclick = () => {
    customFoodForm.reset();
    customModal.classList.add('active');
  };
  
  closeCustomModal.onclick = () => {
    customModal.classList.remove('active');
  };
  
  customFoodForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('custom-food-name').value.trim();
    const size = parseFloat(document.getElementById('custom-food-size').value);
    const unit = document.getElementById('custom-food-unit').value.trim();
    const calories = parseInt(document.getElementById('custom-food-calories').value);
    const protein = parseFloat(document.getElementById('custom-food-protein').value);
    const carbs = parseFloat(document.getElementById('custom-food-carbs').value);
    const fat = parseFloat(document.getElementById('custom-food-fat').value);
    const fiber = parseFloat(document.getElementById('custom-food-fiber').value) || 0;
    
    const newFood = {
      name: name.toLowerCase(),
      keywords: [name.toLowerCase()],
      calories,
      protein,
      carbs,
      fat,
      fiber,
      size,
      unit,
      type: unit.toLowerCase() === 'g' ? 'weight' : 'item'
    };
    
    state.customFoods.push(newFood);
    saveStateToStorage();
    customModal.classList.remove('active');
    showToast(`Added custom food definition for "${capitalizeFirst(name)}"`);
  };
  
  // --- Goal Planner Form Submission ---
  const goalForm = document.getElementById('goal-planner-form');
  goalForm.onsubmit = (e) => {
    e.preventDefault();
    
    state.profile.weight = parseFloat(document.getElementById('goal-weight').value);
    state.profile.height = parseFloat(document.getElementById('goal-height').value);
    state.profile.age = parseInt(document.getElementById('goal-age').value);
    state.profile.gender = document.getElementById('goal-gender').value;
    state.profile.activity = document.getElementById('goal-activity').value;
    state.profile.goal = document.getElementById('goal-target').value;
    
    // Re-estimate BMR/TDEE goals
    recalculateTargets();
    renderAll();
    showToast('Updated daily nutritional goals calculated targets successfully');
    
    // Auto jump to dashboard to see changes
    document.querySelector('[data-tab="dashboard"]').click();
  };
});
