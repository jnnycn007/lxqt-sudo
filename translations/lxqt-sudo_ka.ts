<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ka">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>ბრძანების კოპირება ბუფერში</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;კოპირება</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>მოთხოვნილ ქმედებას ადმინისტრატორის პრივილეგიები სჭირდება.&lt;br&gt;შეიყვანეთ თქვენი პაროლი.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt sudo-ის უკანაბოლო</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>პროგრამა, რომელსაც LXQt sudo იძახებს ფონში, პრივილეგიების ასაწევად.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>ბრძანება:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>პაროლი:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>შეიყვანეთ პაროლი</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>მცდელობა #%1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="78"/>
        <source>Usage: %1 option [command [arguments...]]

GUI frontend for %2/%3/%4

Arguments:
  option:
    -h|--help      Print this help.
    -v|--version   Print version information.
    -s|--su        Use %3(1) as backend.
    -d|--sudo      Use %2(8) as backend.
    -a|--doas      Use %4(1) as backend.
  command          Command to run.
  arguments        Optional arguments for command.

</source>
        <translation>გამოყენება: %1 პარამეტრი [ბრძანება [არგუმენტები...]]

GUI წინაბოლო პროგრამისთვის %2/%3/%4

არგუმენტები:
  პარამეტრები:
    -h|--help      ამ დახმარების გამოტანა.
    -v|--version   ვერსიის ინფორმაციის გამოტანა.
    -s|--su        %3(1)-ის გამოყენება უკანაბოლოს სახით.
    -d|--sudo      %2(8)-ის გამოყენება უკანაბოლოს სახით.
    -a|--doas      %4(1)-ის გამოყენება უკანაბოლოს სახით.
  ბრძანება          გასაშვები ბრძანება.
  არგუმენტები        არასავალდებულო არგუმენტები ბრძანებისთვის.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="96"/>
        <source>%1 version %2
</source>
        <translation>%2 ვერსია %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="205"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: გასაშვები ბრძანება მითითებული არაა!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="212"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: უკანაბოლო არჩეული არაა!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="229"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>სისტემური ფუნქციის შეცდომა. ფორკინგი ჩავარდა: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="257"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>მოხსნა</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="323"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1 დადგენილია პრივილეგირებული ბრძანების LC_ALL env(%2)-ით გაშვების მცდელობა. მუშაობა დასრულდა!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="365"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>სისტემური ფუნქციის შეცდომა. pty-ის არა-ბლოკურ რეჟიმზე გადართვა ჩავარდა: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="373"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>სისტემური ფუნქციის შეცდომა. pty-ის fdopen ჩავარდა: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="342"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: &apos;%2&apos;-ის გაშვება ჩავარდა: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="407"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>შვილი პროცესი &apos;%1&apos; ჩავარდა!
%2</translation>
    </message>
</context>
</TS>
