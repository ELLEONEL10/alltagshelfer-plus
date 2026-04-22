#!/usr/bin/env python3
"""
Cleanup script - Removes unnecessary files from the React project
"""
import os
import sys

def cleanup():
    os.chdir(r'c:\Users\fadi3\Documents\website')
    
    files_to_delete = [
        # Old HTML files
        'index.html',
        'dashboard.html',
        # Old Firebase files (moved to src/firebase/)
        'firebase-config.js',
        'firebase-auth.js',
        'firebase-appointments.js',
        # Old setup scripts
        'setup.bat',
        'setup-dirs.bat',
        'setup.md',
        # Old documentation
        'CHECKLIST.md',
        'FILES_OVERVIEW.txt',
        'DEPLOYMENT_GUIDE.md',
        'PROJECT_COMPLETE.md',
        'CHECKLIST_BEFORE_SETUP.txt',
        'COMPONENTS_READY.md',
        'SETUP_REACT.txt',
        'README_SETUP.txt',
        'START_HERE.txt',
        'START_SETUP.txt',
        'SETUP_READY.txt',
        'REACT_START_HERE.md',
        'REACT_SETUP.md',
        'FINAL_SUMMARY.md',
        'PROJECT_SUMMARY.md',
        'DOCUMENTATION_INDEX.md',
        'cleanup.bat',
        'CLEANUP.bat',
        'CLEANUP_PLAN.txt'
    ]
    
    print('\n' + '=' * 70)
    print('🗑️  CLEANING UP UNNECESSARY FILES')
    print('=' * 70 + '\n')
    
    deleted = 0
    for file in files_to_delete:
        try:
            if os.path.exists(file):
                os.remove(file)
                print(f'✓ Deleted: {file}')
                deleted += 1
        except Exception as e:
            print(f'✗ Error deleting {file}: {e}')
    
    print(f'\n✅ Successfully deleted {deleted} files!\n')
    
    print('=' * 70)
    print('📁 REMAINING PROJECT FILES & FOLDERS')
    print('=' * 70 + '\n')
    
    # List remaining files
    items = sorted(os.listdir('.'))
    
    print('📁 DIRECTORIES:')
    for item in items:
        if os.path.isdir(item) and not item.startswith('.'):
            print(f'   ├─ {item}/')
    
    print('\n📄 FILES:')
    for item in items:
        if os.path.isfile(item) and not item.startswith('.'):
            size = os.path.getsize(item)
            if size < 1024:
                size_str = f'{size} B'
            elif size < 1024*1024:
                size_str = f'{size/1024:.1f} KB'
            else:
                size_str = f'{size/(1024*1024):.1f} MB'
            print(f'   ├─ {item} ({size_str})')
    
    print('\n' + '=' * 70)
    print('✨ PROJECT CLEANUP COMPLETE!')
    print('=' * 70)
    print('\nYour project is now clean and ready to develop!')
    print('\n🚀 Next steps:')
    print('   1. npm install')
    print('   2. npm run dev')
    print('   3. Visit http://localhost:5173\n')

if __name__ == '__main__':
    try:
        cleanup()
    except Exception as e:
        print(f'❌ Error: {e}')
        sys.exit(1)
